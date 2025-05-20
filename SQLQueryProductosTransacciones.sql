IF DB_ID('ProductosDb') IS NULL
BEGIN
    CREATE DATABASE ProductosDb;
END;
GO

USE ProductosDb;
GO

IF OBJECT_ID(N'[__EFMigrationsHistory]', N'U') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] NVARCHAR(150) NOT NULL,
        [ProductVersion] NVARCHAR(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;

IF OBJECT_ID(N'[Products]', N'U') IS NULL
BEGIN
    CREATE TABLE [Products] (
        [Id] INT NOT NULL IDENTITY,
        [Nombre] NVARCHAR(MAX) NOT NULL,
        [Descripcion] NVARCHAR(MAX) NOT NULL,
        [Categoria] NVARCHAR(MAX) NOT NULL,
        [Imagen] NVARCHAR(MAX) NOT NULL,
        [Precio] FLOAT NOT NULL,
        [Stock] INT NOT NULL,
        CONSTRAINT [PK_Products] PRIMARY KEY ([Id])
    );
END;

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250519045537_initial migration', N'9.0.5');

COMMIT;
GO


INSERT INTO [ProductosDb].[dbo].[Products] ([Nombre], [Descripcion], [Categoria], [Imagen], [Precio], [Stock])
VALUES
('Nike Mercurial Vapor 16 Pro TF', 'Zapatillas de fútbol para césped artificial con materiales sostenibles.', 'Calzado', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/81f6385f-50dd-43ae-a9c0-bedb1be2f8d4/Futura+Swoosh+Soccer+Club+Flee.png', 140.00, 25),

('Nike Tiempo Legend 10 Pro TF', 'Zapatillas de fútbol para césped artificial con diseño clásico y materiales sostenibles.', 'Calzado', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/323be6ae-3984-45ba-9dee-64af99cce624/Futura+Swoosh+Soccer+Club+Flee.png', 140.00, 30),

('Nike Phantom GX 2 Academy TF', 'Zapatillas de fútbol para césped artificial con materiales sostenibles.', 'Calzado', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/81f6385f-50dd-43ae-a9c0-bedb1be2f8d4/Futura+Swoosh+Soccer+Club+Flee.png', 90.00, 20),

('Nike Mercurial Superfly 10 Academy TF', 'Zapatillas de fútbol para césped artificial con materiales sostenibles.', 'Calzado', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/323be6ae-3984-45ba-9dee-64af99cce624/Futura+Swoosh+Soccer+Club+Flee.png', 100.00, 15),

('Nike Tiempo Legend 10 Academy TF', 'Zapatillas de fútbol para césped artificial con materiales sostenibles.', 'Calzado', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/81f6385f-50dd-43ae-a9c0-bedb1be2f8d4/Futura+Swoosh+Soccer+Club+Flee.png', 90.00, 35),

('Nike Tiempo Legend 10 Pro TF', 'Zapatillas de fútbol para césped artificial con diseño clásico y materiales sostenibles.', 'Calzado', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/323be6ae-3984-45ba-9dee-64af99cce624/Futura+Swoosh+Soccer+Club+Flee.png', 140.00, 30);





IF DB_ID('TransaccionesDb') IS NULL
BEGIN
    CREATE DATABASE TransaccionesDb;
END;
GO

USE TransaccionesDb;
GO

IF OBJECT_ID(N'[__EFMigrationsHistory]', N'U') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;

IF OBJECT_ID(N'[Products]', N'U') IS NULL
BEGIN
	CREATE TABLE [Transactions] (
		[Id] uniqueidentifier NOT NULL,
		[DateOnly] date NOT NULL,
		[TipoDeTransaccion] nvarchar(max) NULL,
		[ProductoId] int NOT NULL,
		[Cantidad] int NOT NULL,
		[PrecioUnitario] float NOT NULL,
		[PrecioTotal] float NOT NULL,
		[Detalle] nvarchar(max) NULL,
		CONSTRAINT [PK_Transactions] PRIMARY KEY ([Id])
	);
END;

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250519193546_initial migration', N'9.0.5');

COMMIT;
GO



-- Insertar datos de prueba en la tabla Transactions
INSERT INTO [Transactions] (
    [Id], [DateOnly], [TipoDeTransaccion], [ProductoId],
    [Cantidad], [PrecioUnitario], [PrecioTotal], [Detalle]
) VALUES
(NEWID(), '2025-05-20', 'Venta', 1, 3, 10.5, 31.5, 'Venta directa al cliente'),
(NEWID(), '2025-05-19', 'Compra', 2, 5, 7.0, 35.0, 'Compra al proveedor XYZ'),
(NEWID(), '2025-05-18', 'Devolución', 1, 1, 10.5, 10.5, 'Devolución por defecto de producto'),
(NEWID(), '2025-05-17', 'Ajuste', 3, 2, 15.0, 30.0, 'Ajuste de inventario manual'),
(NEWID(), '2025-05-16', 'Venta', 2, 4, 7.0, 28.0, 'Venta con descuento aplicado');
