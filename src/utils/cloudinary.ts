import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

export const cloudinaryImageUrl = (imagePublicId: string) => {
    const cld = new Cloudinary({ cloud: { cloudName: 'jodaz' } });

    const img = cld
        .image(imagePublicId)
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

    return img;
};
