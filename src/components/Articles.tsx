import { useQuery, gql } from '@apollo/client';
import {
    Stack,
    Typography,
    Link,
} from '@mui/material';
import { IPost } from '@/types/models';
import { JumpAnimation } from '@/utils/animations';
import { useTranslation } from 'react-i18next';
import PostCard from './PostCard';

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

    const generateLoading = () => Array(3)
        .fill(null)
        .map((item) => <PostCard post={item}  />)

    const renderPosts = () => data.user.posts.edges.map((post: IPost) => (
        <Link
            href={post.node.url}
            key={post.node.id}
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'block', flex: 1, textDecoration: 'none' }}
        >
            <JumpAnimation>
                <PostCard post={post} t={t} i18n={i18n} />
            </JumpAnimation>
        </Link>
    ))

    return (
        <Stack direction='column' spacing={4} mt={4}>
            <Typography
                variant='h6'
                fontWeight={600}
                gutterBottom
            >
                {t('articles')}
            </Typography>
            <Stack direction={{ sm: 'column', md: 'row' }} spacing={4}>
                {!data ? generateLoading() : renderPosts()}
            </Stack>
        </Stack>
    );
};

export default Articles;
