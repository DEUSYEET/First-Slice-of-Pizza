from PIL import Image, ImageOps
from os import listdir, path, makedirs

makedirs("Left/")
makedirs("Right/")

for filename in listdir("ToppingsHalf/"):
    f = filename[16:]

    img = Image.open(f"ToppingsHalf/{filename}")

    if "Left" in f:
        img.save(f"Left/{path.splitext(f)[0]}.webp")
    elif "Right" in f:
        img.save(f"Right/{path.splitext(f)[0]}.webp")

