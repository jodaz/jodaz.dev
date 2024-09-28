import * as React from 'react'
import { Image } from './Image';
import {
	Box,
    AvatarProps
} from '@mui/material'

interface IAvatar extends AvatarProps {
   height?: number;
   width?: number;
   style?: any;
}

export const Avatar: React.FC<IAvatar> = ({
    sx,
    height = 200,
    width = 200,
    style,
    src = '/images/pic.jpg',
    ...rest
}) => {
	return (
		<Box sx={{
			width: 'fit-content',
			height: 'fit-content',
			boxSizing: 'content-box',
            ...sx
		}} {...rest}>
			<Image
                //@ts-ignore
				src={src}
				alt="avatar"
				width={width}
				height={height}
                style={style}
                useNextImageInDevelopment
			/>
		</Box>
	)
}
