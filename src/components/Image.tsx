import * as React from 'react'
import NextImage from 'next/image'
import {
    AvatarProps
} from '@mui/material'
import { cloudinaryImageUrl } from '@/utils/cloudinary';
import {
    AdvancedImage,
	accessibility,
	placeholder as cldPlaceholder,
	lazyload,
	responsive
} from '@cloudinary/react';

interface IAvatar extends AvatarProps {
   height?: number;
   width?: number;
   style?: any;
   useNextImageInDevelopment?: boolean;
}

export const Image: React.FC<IAvatar> = ({
    height  = 200,
    width = 200,
    style,
    src,
    useNextImageInDevelopment
}) => {
	const shouldRenderNextImage =
		process.env.NODE_ENV === 'development' && Boolean(useNextImageInDevelopment)

    if (!shouldRenderNextImage) {
        return (
            <NextImage
                //@ts-ignore
                src={src}
                alt="avatar"
                width={width}
                height={height}
                blurDataURL='/images/blurred-image.jpg'
                placeholder="blur"
                style={style}
            />
        )
    }

	const plugins = React.useMemo(() => {
		if (!shouldRenderNextImage) return []

		const plugins = []

		plugins.push(lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.1 }))

		plugins.push(cldPlaceholder({ mode: 'blur' }))

		plugins.push(accessibility())

		plugins.push(responsive({ steps: [600, 800, 1000, 1400] }))

		return plugins
	}, [])

	return (
        <AdvancedImage plugins={plugins} cldImg={cloudinaryImageUrl(src)}/>
	)
}
