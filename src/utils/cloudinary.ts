import { Cloudinary } from '@cloudinary/url-gen';

export const cloudinaryImageUrl = (imagePublicId: string) => {
    const cld = new Cloudinary({ cloud: { cloudName: 'jodaz' } });

    const img = cld
        .image(imagePublicId)

    return img;
};
