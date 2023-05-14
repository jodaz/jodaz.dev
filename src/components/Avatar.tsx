import * as React from 'react'
import Image from 'next/image'
import {
	Box
} from '@mui/material'

export const Avatar = () => {

	return (
		<Box sx={{
			width: 'fit-content',
			height: 'fit-content',
			boxSizing: 'content-box',
			borderRadius: '25px'
		}}>
			<Image
				src="/images/avatar.jpeg"
				alt="avatar"
				width={200}
				height={200}	
				blurDataURL='/images/blurred-image.jpg'
				placeholder="blur"
			/>
		</Box>
	)
}
