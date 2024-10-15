import {
    Paper,
    Stack,
    Typography,
    Skeleton
} from '@mui/material';
import Image from 'next/image';
import { IPost } from '@/types/models';
import { formatDate } from '@/utils/date';
import { BookReader } from '@/constants/icons';

interface IPostCard {
    post: null | IPost,
    i18n?: any,
    t?: any
}

const PostCard = ({ post, i18n, t } : IPostCard) => {
    return (
        <Paper elevation={1} sx={{
            borderRadius: 3,
            minHeight: post ? '400px' : '360px',
            display: 'flex',
            flexDirection: 'column',
            mb: 4,
            flex: 1
        }}>
            {post ? (
                <Image
                    src={post.node.coverImage.url}
                    alt='cover_image'
                    width={100}
                    height={200}
                    style={{
                        width: '100%',
                        maxHeight: '200px',
                        borderRadius: '12px'
                    }}
                    layout='responsive'
                    blurDataURL={post.node.coverImage.url}
                />
            ) : (
                <Skeleton
                    animation='wave'
                    variant='rounded'
                    width='100%'
                    height={200}
                />
            )}
            <Stack px={3} py={3} justifyContent='space-between' flex={1}>
                    <Typography
                        variant='subtitle1'
                        gutterBottom
                    >
                        {post ? (
                            post.node.title
                        ) : (
                            <Skeleton
                                animation='wave'
                                variant='text'
                            />
                        )}
                    </Typography>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography variant='body2'>
                        {post ? formatDate(post.node.publishedAt, i18n.language) : (
                            <Skeleton
                                animation='wave'
                                variant='text'
                                width='100px'
                            />
                        )}
                    </Typography>
                    <Typography
                        variant='body2'
                        textAlign='center'
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {!post ? (
                            <Skeleton
                                animation='wave'
                                variant='text'
                                width='100px'
                            />
                        ) : (
                            <>
                                <BookReader
                                    style={{ marginRight: '8px' }}
                                />
                                {post.node.readTimeInMinutes} {t('minutes')}
                            </>
                        )}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default PostCard
