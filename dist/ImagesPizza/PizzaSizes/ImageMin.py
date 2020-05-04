from PIL import Image, ImageOps
from os import listdir, path, makedirs

# img = Image.open("aagib.jpg")
# print(img.format)

size = 450, 450

for filename in listdir("PizzaMedium/Crust/"):
    img = Image.open(f"PizzaMedium/Crust/{filename}")
    if not path.isdir("Crust/"):
        print("\"Crust\" is not a directory")
    if not path.exists("Crust/"):
        makedirs("Crust/")


    img.thumbnail(size, Image.ANTIALIAS)
    image = ImageOps.fit(img, size, Image.ANTIALIAS)
    img.save(f"Crust/{path.splitext(filename)[0]}")

for filename in listdir("PizzaMedium/Toppings/"):
    img = Image.open(f"PizzaMedium/Toppings/{filename}")
    if not path.isdir("Toppings/"):
        print("\"Toppings\" is not a directory")
    if not path.exists("Toppings/"):
        makedirs("Toppings/")


    img.thumbnail(size, Image.ANTIALIAS)
    image = ImageOps.fit(img, size, Image.ANTIALIAS)
    img.save(f"Toppings/{path.splitext(filename)[0]}")



    