# Politica de Privacidad de MigraUSA (Case Tracker)

Ultima actualizacion: 28 de febrero de 2026

## 1. Introduccion
Esta Politica de Privacidad explica como MigraUSA (en adelante, "la App", "nosotros" o "nuestro") recopila, usa, almacena y protege informacion personal cuando usas nuestras funcionalidades.

Al usar la App, aceptas las practicas descritas en esta politica.

## 2. Alcance
Esta politica aplica al uso de la App movil MigraUSA Case Tracker, incluyendo funciones como:
- Consulta y seguimiento de casos USCIS y EOIR
- Notificaciones de actualizaciones de casos
- Funciones premium (suscripciones)
- Asistencia por IA (Tracker AI)
- Soporte y reporte de problemas

## 3. Datos que tratamos
## 3.1 Datos proporcionados por ti
- Numero de recibo USCIS
- Numero EOIR / A-Number
- Nacionalidad (cuando agregas casos EOIR)
- Nombre personalizado que asignas a un caso
- Mensajes que escribes en herramientas de IA
- Correo electronico y mensaje en "Reportar un problema"

## 3.2 Datos generados durante el uso del servicio
- Estado del caso, timeline, descripcion y fechas de guardado/actualizacion
- Datos de perfil de caso para calculos de tiempos (formulario, categoria, centro)
- Estado local de suscripcion premium
- Preferencias de tema de la App
- Notificaciones locales (estado leida/no leida)

## 3.3 Identificadores tecnicos
- Token de notificaciones push del dispositivo (Expo Push Token)
- Token de dispositivo anterior (si rota el token)
- Metadatos tecnicos operativos que pueda registrar la infraestructura (por ejemplo, logs de red del proveedor)

## 3.4 Datos de suscripcion
Para validar acceso premium usamos RevenueCat y procesamos informacion como:
- Entitlements activos
- Identificador del plan/producto
- Estado de suscripcion y fecha de expiracion

## 4. Como recopilamos la informacion
Recopilamos informacion:
- Directamente desde lo que ingresas en la App
- Desde consultas que haces en WebView a portales oficiales (USCIS/EOIR)
- Desde nuestros proveedores de infraestructura para operar funciones (por ejemplo, suscripciones, backend y notificaciones)

## 5. Finalidades de uso
Usamos la informacion para:
- Proveer el seguimiento de casos que solicitas
- Guardar y sincronizar casos entre tu dispositivo y backend
- Detectar cambios y mostrar notificaciones
- Gestionar acceso a funciones premium
- Atender soporte tecnico y reportes
- Operar funciones de IA y mejorar su calidad operativa
- Medir uso funcional basico del producto (por ejemplo, clicks en banners/secciones)
- Cumplir obligaciones legales y responder requerimientos validos

## 6. Base legal del tratamiento (segun jurisdiccion aplicable)
Tratamos datos con base en:
- Ejecucion del servicio solicitado por ti
- Consentimiento (por ejemplo, permisos de notificaciones)
- Interes legitimo en seguridad, continuidad y mejora del servicio
- Cumplimiento de obligaciones legales

## 7. Permisos del dispositivo
La App puede solicitar permisos de notificaciones push para alertarte sobre actualizaciones.
Puedes cambiar estos permisos desde la configuracion del sistema operativo de tu dispositivo.

## 8. Almacenamiento local en el dispositivo
La App usa almacenamiento local (AsyncStorage) para claves como:
- `eoir_cases`, `uscis_cases`
- `caseName_*`
- `uscis_case_profile_*`, `uscis_processing_time_*`
- `user_premium_status`
- `device_token`
- `theme_preference`
- `banner_cache`, `app_session_count`, `review_attempts`, `last_review_request_date`
- `notification_*`

Estos datos se mantienen localmente hasta que los elimines, desinstales la App o se limpien por flujos internos.

## 9. Almacenamiento en backend y nube
Usamos Supabase como backend para operaciones en tablas como:
- `cases`
- `reportar_error`
- `chat_ai` (registro de pares mensaje usuario/respuesta IA en Tracker AI)
- Tablas operativas como `banner`, `click`, `judge_stats`, `uscis_data`, `anuncio`, `analisis`

## 10. IA y tratamiento de conversaciones
La App usa funciones de IA:
- `Tracker AI`: envia mensajes a una Edge Function y luego al proveedor de IA
- Servicios de chat complementarios en algunas funciones de la App

Para operacion del servicio, ciertas conversaciones pueden almacenarse en backend (por ejemplo, `chat_ai`).

No compartas informacion innecesariamente sensible en chats.

## 11. Comparticion con terceros
Podemos compartir datos con proveedores que nos ayudan a operar el servicio:
- Supabase (backend y base de datos)
- RevenueCat (suscripciones)
- OpenAI (procesamiento de mensajes de IA)
- Expo Notifications / infraestructura push (notificaciones)

Tambien puedes abrir enlaces externos (por ejemplo, USCIS, EOIR, CBP, ICE, WhatsApp, App Store). Al salir de la App aplican las politicas del tercero correspondiente.

No vendemos tus datos personales.

## 12. Transferencias internacionales
Nuestros proveedores pueden procesar informacion en Estados Unidos u otras jurisdicciones donde operan. Al usar la App, aceptas estas transferencias conforme a la ley aplicable.

## 13. Retencion y eliminacion de datos
## 13.1 Retencion
- Datos locales: hasta que los elimines, desinstales la App o se limpien por flujo de producto.
- Datos backend: por el tiempo necesario para operar el servicio, seguridad, cumplimiento legal y mejora legitima.

## 13.2 Eliminacion por el usuario
Puedes eliminar casos directamente desde la App (caso individual o todos los casos).
Para solicitar supresion de datos backend asociados a tu uso, contactanos por canales de soporte en la App.

## 14. Seguridad
Aplicamos medidas tecnicas y organizativas razonables para proteger informacion personal. Aun asi, ningun sistema es totalmente inmune a incidentes.

## 15. Notificacion de incidentes de seguridad
Si identificamos un incidente de seguridad que pueda afectar datos personales, notificaremos conforme a la legislacion aplicable y con la informacion relevante para mitigacion.

## 16. Tus derechos de privacidad
Dependiendo de tu jurisdiccion, puedes solicitar:
- Acceso
- Rectificacion
- Supresion
- Restriccion u oposicion al tratamiento
- Portabilidad (cuando aplique)
- Retiro de consentimiento (cuando aplique)

Puedes iniciar solicitudes por:
- `Mas > Soporte y ayuda > Reportar un problema`
- `Mas > Soporte y ayuda > Contactar por WhatsApp`

Podemos pedir informacion minima para verificar identidad y evitar fraude.

## 17. Informacion adicional para residentes de California
Si resides en California, puedes tener derechos adicionales bajo leyes de privacidad estatales, incluyendo derecho a conocer, corregir y eliminar informacion personal, sujeto a excepciones legales.

## 18. Informacion adicional para residentes del EEE, Reino Unido y Suiza
Si resides en EEE/Reino Unido/Suiza, puedes ejercer derechos adicionales (acceso, rectificacion, supresion, limitacion, oposicion y portabilidad), sujeto a los requisitos legales aplicables.

## 19. Menores de edad
La App no esta dirigida intencionalmente a menores de 13 anos. Si crees que un menor envio datos personales, contactanos para evaluarlo y eliminarlo cuando corresponda.

## 20. Enlaces y politicas de terceros
La App puede conectarte con sitios y servicios de terceros. No controlamos sus practicas de privacidad.

En particular, cuando consultes informacion en portales oficiales, revisa sus politicas:
- USCIS: https://www.uscis.gov/website-policies/privacy-and-legal-disclaimers
- Department of Justice: https://www.justice.gov/doj/privacy-policy

## 21. Cambios a esta politica
Podemos actualizar esta Politica de Privacidad en cualquier momento.
Publicaremos la version vigente con fecha de actualizacion.
Si el cambio es material, podremos notificarlo dentro de la App antes de su entrada en vigor.
