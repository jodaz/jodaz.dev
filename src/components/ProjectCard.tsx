import * as React from 'react'
import { Typography, Box, Stack, styled, Grid, Link } from '@mui/material'
import { IProject } from '@/types/models'
import { Code, LinkIcon } from '@/constants/icons'
import { Image } from './Image'
import { SkillStack } from './SkillStack'

const Item = styled(Link)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	width: 'fit-content',
	color: theme.palette.text.secondary,
	fontWeight: 700,
	borderRadius: theme.spacing(1),
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}))

const ProjectCard = ({ item, key, t }: { item: IProject; key: number; t: any }) => {
	return (
		<Grid key={key} sx={{ mb: 4 }}>
			<Stack
				direction='column'
				spacing={2}
				sx={{
					minHeight: '450px',
					mb: 4
				}}
			>
				<Box sx={{ borderRadius: '6px' }}>
					<Image src={item.picture} alt='project' width={300} height={200} />
				</Box>
				<Box
					sx={{
						textAlign: 'left',
						pr: '20px',
						flex: 1,
						height: '100%'
					}}
				>
					<Typography variant='h6' fontWeight={900} gutterBottom>
						{item.name}
					</Typography>
					<Typography fontWeight={300} gutterBottom>
						{item.description}
					</Typography>
				</Box>
				<SkillStack item={item} t={t} />
				<Stack direction='row' spacing={2}>
					{item.github ? (
						<Item href={item.github} target='_blank'>
							<Code size='1rem' style={{ marginRight: '10px' }} />
							{t('source')}
						</Item>
					) : null}
					{item.href ? (
						<Item href={item.href} target='_blank'>
							<LinkIcon size='1rem' style={{ marginRight: '10px' }} />
							{t('web')}
						</Item>
					) : null}
				</Stack>
			</Stack>
		</Grid>
	)
}

export default ProjectCard
