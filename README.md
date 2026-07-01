# Simulador EEI · Análisis de Programa Hotelero

Demostrador EEI (Experiencia de Estancia Inteligente) para análisis de programas hoteleros · Acttiv.

## Estructura

```
simulador-eei-hotel/
├── index.html              # SPA del simulador (Setup + Modo A + Modo B)
├── package.json            # Dependencia: @anthropic-ai/sdk
├── netlify.toml            # Configuración de build y redirects
└── netlify/
    └── functions/
        └── claude.js       # Serverless function que llama a la API de Claude
```

## Variables de entorno (Netlify)

En **Site configuration → Environment variables**:

- `ANTHROPIC_API_KEY` — clave de la API de Anthropic (console.anthropic.com)

## Modelo

Usa `claude-sonnet-4-6` por defecto (definido en `claude.js` y en la llamada del frontend).

## Despliegue

1. Push a GitHub → Netlify auto-despliega
2. Verificar en el log: `Functions bundling - claude.js`
3. La función queda disponible en `/api/claude` (redirect declarado en `netlify.toml`)
