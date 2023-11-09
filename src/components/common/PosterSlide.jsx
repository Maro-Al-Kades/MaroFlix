import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import AutoSwiper from "./AutoSwiper";

const PosterSlide = ({ posters }) => {
  return (
    <AutoSwiper>
      {[...posters].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <Box sx={{
            paddingTop: "160%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${tmdbConfigs.posterPath(item.file_path)})`,
            margin: "4px",
            border : "1px solid #473BF0",
            borderRadius: "10px",
          }} />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default PosterSlide;