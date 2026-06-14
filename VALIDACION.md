# Validación — Unroasted Green Coffee

Objetivo del MVP: **validar que hay demanda real** de un proveedor de café verde
(especialidad + comercial) usando una landing simple. Sin backend, los leads se
miden por **clics a Contacto/WhatsApp** y **mensajes reales recibidos**.

## Cómo saber si el proyecto sigue adelante

Revisión **semanal de 5 min**. Apunta los números y decide:

| Métrica | De dónde sale | Qué buscamos |
|---|---|---|
| Visitas únicas / semana | Vercel Web Analytics | Que crezca al compartir la web |
| Clics en CTA (Contact + WhatsApp) | Vercel Analytics (eventos) o estimación | Que la gente quiera contactar |
| Tasa de clic a CTA | clics ÷ visitas | **≥ 3 %** = el mensaje engancha |
| **Inquiries reales** (correos/WhatsApp) | Tu bandeja / WhatsApp | **La métrica que manda** |
| Calidad de la inquiry | Leer el mensaje | ¿Compradores/tostadores reales? |

### Semáforo de decisión (revisar a las ~4–6 semanas de difundir)
- 🟢 **Seguir**: ≥1–2 inquiries reales de compradores cualificados, o CTR ≥3 % con tráfico creciendo.
  → Invertir en fotos reales, más contenido, catálogo por origen.
- 🟡 **Iterar**: hay visitas pero CTR bajo o inquiries flojas.
  → `growth` prueba nuevo titular/CTA/mensaje; `maintainer` ajusta lo que haga falta. Re-medir.
- 🔴 **Parar/pivotar**: tras semanas difundiendo activamente, ~0 visitas útiles y 0 inquiries.
  → La landing no es el problema: revisar canal de captación o la propia hipótesis de negocio.

> Importante: nada de esto importa sin **difusión**. Una web que nadie visita no valida ni
> invalida. Primero hay que llevar tráfico cualificado (LinkedIn, directorios, outreach, ferias).

## Registro semanal

> Rellena una fila por semana. `growth` lo lee y da veredicto.

| Semana | Visitas | Clics CTA | CTR | Inquiries | Notas / acción |
|--------|---------|-----------|-----|-----------|----------------|
| (ej.) 2026-06-16 | — | — | — | — | Deploy inicial; aún sin difundir |
|  |  |  |  |  |  |

## Pendientes para que la medición funcione
- [ ] Activar **Vercel Web Analytics** en el proyecto (paquete `@vercel/analytics`, 1 línea).
- [ ] Definir un plan de difusión inicial (¿por dónde llegan los primeros tostadores/compradores?).
- [ ] Sustituir placeholders verdes por **fotos reales** (sube conversión y confianza).
