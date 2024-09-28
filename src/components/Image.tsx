import * as React from 'react'
import NextImage from 'next/image'
import {
    AvatarProps
} from '@mui/material'
import { cloudinaryImageUrl } from '@/utils/cloudinary';
import {
    AdvancedImage,
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
		process.env.NODE_ENV === 'development' || Boolean(useNextImageInDevelopment)
    console.log(shouldRenderNextImage)
    if (shouldRenderNextImage) {
        return (
            <NextImage
                //@ts-ignore
                src={src}
                alt="avatar"
                width={width}
                height={height}
                style={style}
            />
        )
    }

	const plugins = React.useMemo(() => {
		if (!shouldRenderNextImage) return []

		const plugins = []

		plugins.push(lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.1 }))

		plugins.push(cldPlaceholder({ mode: 'blur' }))

		plugins.push(responsive({ steps: [600, 800, 1000, 1400] }))

		return plugins
	}, [])

	return (
        <AdvancedImage
            plugins={plugins}
            //@ts-ignore
            cldImg={cloudinaryImageUrl(src)}
            style={{
                height: height,
                width: width,
                ...style
            }}
        />
	)
}
