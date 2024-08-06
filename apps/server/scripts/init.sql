CREATE DATABASE SistemaInventario;

USE SistemaInventario;

-- Para la tabla de los Tipos de Inventario
CREATE TABLE TiposInventario (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Descripcion NVARCHAR(255) NOT NULL,
    CuentaContable NVARCHAR(50) NOT NULL,
    Estado NVARCHAR(10) NOT NULL CHECK (Estado IN ('Activo', 'Inactivo'))
);

-- Para la tabla de los Almacenes
CREATE TABLE Almacenes (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Descripcion NVARCHAR(255) NOT NULL, --Que tipo de elementos se almacenanen un almacen
	Locacion NVARCHAR (255) NOT NULL,
    Estado NVARCHAR(10) NOT NULL CHECK (Estado IN ('Activo', 'Inactivo'))
);

-- Para la tabla de los Articulos
-- Se conecta con los Tipos de Inventario y al Almacen al que pertenece
CREATE TABLE Articulos (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Descripcion NVARCHAR(255) NOT NULL,
    Existencia INT NOT NULL CHECK (Existencia >= 0), --Cantidad de los articulos, no puede estar en los numeros negativos
    TipoInventarioID INT NOT NULL,
    AlmacenID INT NOT NULL,
    CostoUnitario DECIMAL(10, 2) NOT NULL CHECK (CostoUnitario >= 0.01), --El costo del articulo tiene que ser mayor a 0.01
    Estado NVARCHAR(50) NOT NULL CHECK (Estado IN ('Existente', 'Agotado')),
    FOREIGN KEY (TipoInventarioID) REFERENCES TiposInventario(ID),
    FOREIGN KEY (AlmacenID) REFERENCES Almacenes(ID)
);

-- Para la tabla de las Transacciones
-- Se conecta con los Articulos
CREATE TABLE Transacciones (
    ID INT PRIMARY KEY IDENTITY(1,1),
    TipoTransaccion NVARCHAR(10) NOT NULL CHECK (TipoTransaccion IN ('Entrada', 'Salida', 'Traslado', 'Ajuste')),
    ArticuloID INT NOT NULL,
    Fecha DATETIME NOT NULL,
    Cantidad INT NOT NULL,
    Monto DECIMAL(18, 2) NOT NULL,
    AsientoContable NVARCHAR(50) NULL,
    FOREIGN KEY (ArticuloID) REFERENCES Articulos(ID),
);