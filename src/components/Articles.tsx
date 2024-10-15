import { useQuery, gql } from '@apollo/client';
import {
    Paper,
    Stack,
    Typography,
    Link
} from '@mui/material';
import Image from 'next/image';
import { IPost } from '@/types/models';
import { formatDate } from '@/utils/date';
import { JumpAnimation } from '@/utils/animations';
import { BookReader } from '@/constants/icons';
import { useTranslation } from 'react-i18next';

const GET_ARTICLES = gql`
    query GetArticles($username: String!) {
        user(username: $username) {
            posts(pageSize: 3, page: 1) {
                edges {
                    node {
                        id,
                        title,
                        publishedAt,
                        url,
                        brief,
                        readTimeInMinutes,
                        coverImage {
                            url
                        }
                    }
                }
            }
        }
    }
`;

const username = 'jodaz';

const Articles = () => {
    const { t, i18n } = useTranslation('common')

    const { data } = useQuery(GET_ARTICLES, {
        variables: { username: username }
    });

    if (!data) return <></>;

    return (
        <Stack direction='column' spacing={4} mt={4}>
            <Typography variant='h6'>
                {t('articles')}
            </Typography>
            <Stack direction={{ sm: 'column', md: 'row' }} spacing={4}>
                {data.user.posts.edges.map((post: IPost) => (
                    <Link
                        href={post.node.url}
                        key={post.node.id}
                        underline="none"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: 'block', flex: 1, textDecoration: 'none' }}
                    >
                        <JumpAnimation>
                            <Paper elevation={1} sx={{
                                borderRadius: 3,
                                height: '360px',
                                display: 'flex',
                                flexDirection: 'column',
                                mb: 4
                            }}>
                                <Image
                                    src={post.node.coverImage.url}
                                    alt='cover_image'
                                    width={100}
                                    height={100}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        borderRadius: '12px'
                                    }}
                                />
                                <Stack px={3} py={3} justifyContent='space-between' flex={1}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        {post.node.title}
                                    </Typography>
                                    <Stack direction='row' justifyContent='space-between'>
                                        <Typography variant='body2'>
                                            {formatDate(post.node.publishedAt, i18n.language)}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            textAlign='center'
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <BookReader
                                                style={{ marginRight: '8px' }}
                                            />
                                            {post.node.readTimeInMinutes} {t('minutes')}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </JumpAnimation>
                    </Link>
                ))}
            </Stack>
        </Stack>
    );
};

export default Articles;
