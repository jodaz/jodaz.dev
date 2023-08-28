import { Typography, Box, List, ListItem, styled } from "@mui/material"
import { IPosition, IWorkExperience } from "@/types/models"
import { Dot } from "@/constants/icons";

interface IProps {
    key: number;
    item: IWorkExperience
}

const Item = styled(ListItem)(() => ({
    alignItems: 'start',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '8px'
}))

const PositionContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        left: '-1.6rem',
        top: '1.5rem',
        height: '100%',
        width: '5px',
        borderRadius: '8px',
        background: theme.palette.info.light,
    },
}))

const DotContainer = styled(Box)(({ theme }) => ({
    marginTop: '-0.8rem',
    color: theme.palette.info.light
}))

const WorkExperience = ({
    item, key
}: IProps) => (
    <Box key={key}>
        <Typography variant="subtitle1" fontWeight={900}>
            {item.business_name}
        </Typography>
        <List disablePadding>
            {item.positions.map((position: IPosition, index) => (
                <Item key={index}>
                    <DotContainer>
                        <Dot size='3rem' />
                    </DotContainer>
                    <PositionContainer>
                        <Typography
                            variant="subtitle1"
                            textTransform='uppercase'
                            fontWeight={700}
                            color="info.light"
                        >
                            {position.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            fontWeight={300}
                            fontSize='12px'
                        >
                            {position.years}
                        </Typography>
                    </PositionContainer>
                </Item>
            ))}
        </List>
    </Box>
)

export default WorkExperience
