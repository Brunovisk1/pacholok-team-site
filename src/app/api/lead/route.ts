import { NextRequest, NextResponse } from "next/server";

const AC_URL = "https://adgoficial.api-us1.com/api/3";
const AC_TOKEN = process.env.ACTIVECAMPAIGN_API_TOKEN || "";
const LIST_ID = Number(process.env.AC_LIST_ID_TESTE || "75");

const PLAN_TAG_MAP: Record<string, number> = {
  espartano: 320,
  centuriao: 321,
  olimpo: 322,
};

const OUTSIDE_BR_TAG_MAP: Record<string, number> = {
  sim: 324,
  nao: 325,
};

interface LeadBody {
  name?: string;
  email?: string;
  phone?: string;
  plan?: string;
  outsideBrazil?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function acFetch(path: string, init: RequestInit = {}) {
  return fetch(`${AC_URL}${path}`, {
    ...init,
    headers: {
      "Api-Token": AC_TOKEN,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
}

export async function POST(req: NextRequest) {
  if (!AC_TOKEN) {
    return NextResponse.json({ error: "AC_TOKEN_MISSING" }, { status: 500 });
  }

  let body: LeadBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim().toLowerCase();
  const phone = (body.phone || "").trim();
  const plan = (body.plan || "").trim().toLowerCase();
  const outsideBrazil = (body.outsideBrazil || "").trim().toLowerCase();

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "INVALID_NAME" }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "INVALID_EMAIL" }, { status: 400 });
  }

  const [firstName, ...rest] = name.split(/\s+/);
  const lastName = rest.join(" ");

  const contactPayload: Record<string, string> = { email, firstName, lastName };
  if (phone) contactPayload.phone = phone;

  const syncRes = await acFetch("/contact/sync", {
    method: "POST",
    body: JSON.stringify({ contact: contactPayload }),
  });

  if (!syncRes.ok) {
    const text = await syncRes.text();
    return NextResponse.json(
      { error: "AC_CONTACT_FAILED", detail: text },
      { status: 502 }
    );
  }

  const syncJson = (await syncRes.json()) as { contact?: { id?: string } };
  const contactId = syncJson.contact?.id;
  if (!contactId) {
    return NextResponse.json({ error: "AC_NO_CONTACT_ID" }, { status: 502 });
  }

  await acFetch("/contactLists", {
    method: "POST",
    body: JSON.stringify({
      contactList: { list: LIST_ID, contact: Number(contactId), status: 1 },
    }),
  });

  const tagsToApply: number[] = [];
  const planTag = PLAN_TAG_MAP[plan];
  if (planTag) tagsToApply.push(planTag);
  const outsideTag = OUTSIDE_BR_TAG_MAP[outsideBrazil];
  if (outsideTag) tagsToApply.push(outsideTag);

  await Promise.all(
    tagsToApply.map((tag) =>
      acFetch("/contactTags", {
        method: "POST",
        body: JSON.stringify({
          contactTag: { contact: Number(contactId), tag },
        }),
      })
    )
  );

  return NextResponse.json({ ok: true, contactId, tagsApplied: tagsToApply });
}
