from PIL import Image

def crop_img(path):
    try:
        img = Image.open(path).convert('RGBA')
        bbox = img.getbbox()
        print(f"Image {path} original size: {img.size}, bounding box: {bbox}")
        if bbox:
            img = img.crop(bbox)
            img.save(path)
            print(f"Cropped and saved {path}")
    except Exception as e:
        print(f"Error processing {path}: {e}")

crop_img('./public/dangal.png')
crop_img('./public/dgym.png')
