# 📦 Como Importar no Claude Code

## Passo 1: Copiar a Pasta do Projeto

```bash
# A pasta está localizada em:
/home/ubuntu/adg-landing-page/

# Copie toda a pasta para seu computador
```

## Passo 2: Abrir no Claude Code

1. Abra o Claude Code
2. Clique em "Abrir Pasta" ou "Open Folder"
3. Selecione a pasta `adg-landing-page`
4. Pronto! Você tem acesso a todos os arquivos

## Passo 3: Estrutura do Projeto

```
adg-landing-page/
├── index.html              # Arquivo principal (comece por aqui)
├── css/
│   └── styles.css         # Todos os estilos (CSS puro, sem dependências)
├── js/
│   └── script.js          # Interatividade (JavaScript vanilla)
├── assets/
│   ├── images/            # Coloque as imagens aqui
│   └── icons/             # Ícones SVG
├── README.md              # Documentação completa
├── STRATEGY.md            # Estratégia de conversão
└── IMPORTAR_CLAUDE_CODE.md (este arquivo)
```

## Passo 4: Adicionar Imagens

A landing page espera 3 imagens. Coloque-as em `assets/images/`:

1. **logo.png** (40px de altura)
   - Logo do Além da Genética
   - Formato: PNG com fundo transparente

2. **pacholok-hero.png** (quadrado 1:1)
   - Foto de Fabrício Pacholok para hero section
   - Recomendado: 600x600px ou maior

3. **pacholok-profile.png** (quadrado 1:1)
   - Foto de Fabrício Pacholok para seção de perfil
   - Recomendado: 600x600px ou maior

## Passo 5: Testar Localmente

### Opção 1: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"
4. Abre automaticamente no navegador

### Opção 2: Python
```bash
# Python 3
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

### Opção 3: Node.js
```bash
# Instale http-server globalmente
npm install -g http-server

# Execute na pasta do projeto
http-server

# Acesse: http://localhost:8080
```

## Passo 6: Customizar

### Mudar Cores
Abra `css/styles.css` e procure por `:root`:

```css
:root {
    --color-primary: #000000;        /* Mude para sua cor */
    --color-accent: #ffd700;         /* Cor de destaque */
    --color-green: #00d084;          /* Cor de sucesso */
    /* ... outras cores ... */
}
```

### Mudar Textos
Abra `index.html` e edite o conteúdo diretamente:

```html
<h1 class="hero-title">
    <span class="highlight-yellow">Seu texto aqui</span>
</h1>
```

### Mudar Links de CTAs
Procure por `href="#"` e substitua pelo link real:

```html
<!-- Antes -->
<a href="#" class="btn btn-primary">Quero Começar Agora</a>

<!-- Depois -->
<a href="https://seu-link-de-vendas.com" class="btn btn-primary">Quero Começar Agora</a>
```

## Passo 7: Conectar com Sistema de Vendas

### Hotmart
```html
<a href="https://hotmart.com/seu-produto" class="btn btn-primary">
    Quero Começar Agora
</a>
```

### Kiwify
```html
<a href="https://kiwify.com.br/seu-produto" class="btn btn-primary">
    Quero Começar Agora
</a>
```

### Seu próprio sistema
```html
<a href="https://seu-site.com/checkout" class="btn btn-primary">
    Quero Começar Agora
</a>
```

## Passo 8: Adicionar Google Analytics

Abra `index.html` e adicione no `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Substitua `GA_MEASUREMENT_ID` pelo seu ID real.

## Passo 9: Adicionar Pixel de Rastreamento (Meta)

Abra `index.html` e adicione no `<head>`:

```html
<!-- Meta Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

Substitua `SEU_PIXEL_ID` pelo seu ID real.

## Passo 10: Deploy

### Opção 1: Vercel (Recomendado)
1. Acesse https://vercel.com
2. Conecte seu GitHub
3. Importe o repositório
4. Deploy automático

### Opção 2: Netlify
1. Acesse https://netlify.com
2. Arraste a pasta para "Deploy"
3. Pronto! Seu site está online

### Opção 3: Seu próprio servidor
1. Faça upload dos arquivos via FTP
2. Configure o domínio
3. Pronto!

## 📱 Testar Responsividade

### No Chrome DevTools
1. Abra a página
2. Pressione `F12` ou `Ctrl+Shift+I`
3. Clique no ícone de dispositivo (canto superior esquerdo)
4. Teste em diferentes tamanhos

### Tamanhos para testar
- Desktop: 1920x1080
- Tablet: 768x1024
- Mobile: 375x667 (iPhone)
- Mobile: 412x915 (Android)

## 🔍 Verificar Performance

### Google PageSpeed Insights
1. Acesse https://pagespeed.web.dev
2. Cole a URL da sua landing page
3. Veja sugestões de otimização

### Lighthouse (Chrome DevTools)
1. Abra DevTools (F12)
2. Clique em "Lighthouse"
3. Clique em "Analyze page load"
4. Veja relatório completo

## 🐛 Troubleshooting

### Imagens não aparecem
- Verifique se os arquivos estão em `assets/images/`
- Verifique os nomes dos arquivos (case-sensitive)
- Verifique se o caminho está correto no HTML

### Estilos não funcionam
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se `css/styles.css` está no lugar correto
- Verifique se há erros no console (F12 > Console)

### JavaScript não funciona
- Verifique se `js/script.js` está no lugar correto
- Verifique se há erros no console (F12 > Console)
- Verifique se o navegador suporta ES6

## 📞 Suporte

Se tiver dúvidas:
1. Leia o `README.md`
2. Leia o `STRATEGY.md`
3. Verifique o console do navegador (F12)
4. Procure por comentários no código

## ✅ Checklist Final

Antes de lançar:

- [ ] Imagens adicionadas e visíveis
- [ ] Links de CTA funcionando
- [ ] Google Analytics configurado
- [ ] Pixel de rastreamento configurado
- [ ] Testado em desktop, tablet e mobile
- [ ] Testado em Chrome, Firefox, Safari
- [ ] Performance OK (PageSpeed > 80)
- [ ] Sem erros no console
- [ ] Domínio configurado
- [ ] SSL/HTTPS ativado

---

**Pronto para lançar sua landing page! 🚀**
