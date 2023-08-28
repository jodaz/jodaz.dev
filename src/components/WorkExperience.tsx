import { Typography, Box } from "@mui/material"
import { IWorkExperience } from "@/types/models"

interface IProps {
    key: number;
    item: IWorkExperience
}

const WorkExperience = ({
    item, key
}: IProps) => (
    <Box key={key}>
        <Typography variant="subtitle2" textTransform='uppercase' fontWeight={700} color="info.light">
            {item.position}
        </Typography>
        <Typography variant="subtitle2" fontWeight={900} textTransform='uppercase'>
            {item.business_name}
        </Typography>
        <Typography variant="subtitle2" fontWeight={300} fontSize='12px'>
            {item.years}
        </Typography>
    </Box>
)

export default WorkExperience
