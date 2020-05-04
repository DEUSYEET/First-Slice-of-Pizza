from PIL import Image, ImageOps
from os import listdir, path, makedirs

# img = Image.open("aagib.jpg")
# print(img.format)

size = int(input("Size Value: ")) 

for filename in listdir("Toppings/"):
    img = Image.open(f"Toppings/{filename}")
    if not path.exists("ToppingsHalf/"):
        makedirs("ToppingsHalf/")
        makedirs("ToppingsHalf/Right/")
        makedirs("ToppingsHalf/Left/")

    imgLeftCrop = img.crop((0, 0, size/2, size))
    imgRightCrop = img.crop((size/2, 0, size, size))

    imgLeftCrop.save(f"ToppingsHalf/Left/{path.splitext(filename)[0]}Left.webp")
    imgRightCrop.save(f"ToppingsHalf/Right/{path.splitext(filename)[0]}Right.webp")



    