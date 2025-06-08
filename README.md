# Sistema de Gestión de Productos y Transacciones

Este proyecto permite gestionar productos y transacciones asociadas, con funcionalidades de creación, edición, filtrado y visualización con paginación.

---

## ✅ Requisitos

Antes de ejecutar este proyecto en un entorno local, asegúrate de tener instalado:

- [.NET 8 SDK o superior]
- [SQL Server]
- [Node.js y npm]
- [Visual Studio]
- [Visual Studio Code]
---

## 🛠️ Base de Datos

Este proyecto incluye un script SQL para crear la base de datos y sus tablas.

### ▶️ Pasos para configurar la base de datos:

1. Abre **SQL Server Management Studio (SSMS)**.
2. Conéctate a tu instancia de SQL Server.
3. Abre el archivo `SQLQueryProductosTransacciones.sql` que se encuentra en la raíz del proyecto.
4. Ejecuta el script para crear la base de datos y las tablas necesarias.

---

## 🚀 Ejecución del Backend (.NET)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. Abre el proyecto backend en Visual Studio o VS Code.

3. Restaura los paquetes:
    ```bash
   dotnet restore

4. Crea la base de datos ejecutando el script generado (SQLQueryProductosTransacciones.sql) en SQL Server Management Studio

5. Dentro del proyecto presionar la tecla F5

6. La API de Productos estará disponible en:
   ```bash
   https://localhost:7081/swagger/index.html
7. La API de Transacciones estará disponible en:
    ```bash
   https://localhost:7295/swagger/index.html

## 🚀 Ejecución del Frontend (.NET)

1. Abre la carpeta del frontend en Visual Studio Code.
   
3. Instala las dependencias:
   ```bash
    npm install

4. Ejecuta la aplicación:
   ```bash
    npm run dev
   
5. El frontend estará disponible en:
   ```bash
    http://localhost:5173/
