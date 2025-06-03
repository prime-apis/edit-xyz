import Jimp from 'jimp';

export async function editImage(imageUrl, text) {
  const image = await Jimp.read(imageUrl);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);

  image.print(font, 10, 10, {
    text,
    alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
    alignmentY: Jimp.VERTICAL_ALIGN_TOP
  }, image.bitmap.width - 20, image.bitmap.height - 20);

  return await image.getBufferAsync(Jimp.MIME_PNG);
}
