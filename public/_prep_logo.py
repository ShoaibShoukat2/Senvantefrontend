from pathlib import Path

import numpy as np
from PIL import Image

src = Path(r"\\?\C:\Users\Shoaib\.cursor\projects\d-Company-AgencySite\assets\C__USE~1.PNG")
dst = Path(r"D:\Company\AgencySite\frontend\public\senvante-logo.png")

im = Image.open(src).convert("RGBA")
arr = np.array(im)
rgb = arr[:, :, :3].astype(np.int16)
mx = rgb.max(axis=2)
# Knock out the black canvas. Dark ribbon pixels stay; near-black fades out.
alpha = np.clip((mx.astype(np.float32) - 12) * (255 / 28), 0, 255).astype(np.uint8)
arr[:, :, 3] = np.minimum(arr[:, :, 3], alpha)

out = Image.fromarray(arr)
bbox = out.getbbox()
if bbox:
    out = out.crop(bbox)
out.save(dst, "PNG")
print(out.size, dst.stat().st_size)
