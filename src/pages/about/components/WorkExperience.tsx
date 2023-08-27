import { Typography, Box } from "@mui/material"
import { IWorkExperience } from "@/types/models"

interface IProps {
    index: number;
    item: IWorkExperience
}

const WorkExperience = ({
    item, index
}: IProps) => (
    <Box key={index}>
        <Typography variant="subtitle1" fontWeight={900} color="info.main">
            {item.position}
        </Typography>
        <Typography variant="subtitle2" fontWeight={900} textTransform='uppercase'>
            {item.business_name}
        </Typography>
        <Typography variant="subtitle2" fontWeight={300}>
            {item.years}
        </Typography>
    </Box>
)

export default WorkExperience
