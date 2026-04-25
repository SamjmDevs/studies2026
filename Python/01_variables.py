#Comenzamos con las variables
primera_variable_string = "Soy una variable de string"
segunda_variable_string = "Y yo soy otra"
mi_variable_int = 23
mi_variable_bool = False

print(primera_variable_string)
print(mi_variable_int)
print(mi_variable_bool)

#Los argumentos se pasan separados por comas
print(primera_variable_string, mi_variable_int)

#Vemos longitud de cadena contando espacios
print(len(primera_variable_string))

#Concatenamos cadenas
suma_de_cadenas = primera_variable_string + " " + segunda_variable_string
print(suma_de_cadenas)

print("La length de primera_variable_string es:", len(primera_variable_string))

#Variable en una sola línea. Cuidado con abusar de esta sintaxis
nombre, apodo, edad = "Samu", "Pache", 32

print(nombre)
print(apodo)
print(edad)

#podemos usar input para meter a mano datos (Hay formas mejores)
nombre_input = input("¿Cómo te llamas? ")

print("Me llamo: ",nombre_input)

#Recalcamos que tipo de dato queremos que sea, sirve como aviso a otros devs o en un input para guardar el dato
address: str = "Calle Ave del Paraiso 21"