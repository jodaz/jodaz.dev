import { Typography, Box } from "@mui/material"
import { IWorkExperience } from "@/types/models"

interface IProps extends IWorkExperience {
    key: number;
}

const WorkExperience = ({
    years, business_name, position
}: IProps) => (
    <Box key={years}>
        <Typography variant="subtitle1" fontWeight={900} color="info.main">
            {position}
        </Typography>
        <Typography variant="subtitle2" fontWeight={900} textTransform='uppercase'>
            {business_name}
        </Typography>
        <Typography variant="subtitle2" fontWeight={300}>
            {years}
        </Typography>
    </Box>
)

export default WorkExperience
