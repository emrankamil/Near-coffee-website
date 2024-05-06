import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../theme";

const DownloadApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      alignItems="center"
      px="60px"
      mt="200px"
      gap={"100px"}
      backgroundColor="#bf951d"
      justifyContent="center"
    >
      <Box justifyContent="left">
        <Box mb="50px">
          <Typography variant="h2" fontWeight={"bold"} color={colors.gray[100]}>
            Download App
          </Typography>
        </Box>
        <Box my="30px">
          <Typography variant="h4" color={colors.gray[100]} fontWeight="bold">
            All your favorite brand in one place
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" gap="30px">
          {/* apple-store */}
          <Box
            display="flex"
            border="solid 2px"
            borderRadius="12.95px"
            p="20px"
            gap="10px"
            borderColor={colors.gray[100]}
            alignItems="center"
          >
            <Box>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.2127 9.57861C41.3999 7.04364 42.8742 3.51294 42.4707 0C39.3188 0.12 35.5056 2.01344 33.2456 4.54541C31.2161 6.79238 29.4445 10.3827 29.9208 13.8267C33.4367 14.0876 37.0254 12.1166 39.2127 9.57861ZM47.097 31.875C47.1849 40.9559 55.409 43.9766 55.5 44.0156C55.4333 44.2286 54.1865 48.3199 51.168 52.5498C48.5561 56.2038 45.8471 59.8429 41.5789 59.9209C37.3864 59.9959 36.0365 57.5391 31.2404 57.5391C26.4473 57.5391 24.9487 59.8426 20.9808 59.9956C16.8612 60.1426 13.7214 56.0423 11.0913 52.4004C5.7097 44.9515 1.5992 31.3503 7.12033 22.1704C9.86269 17.6135 14.7619 14.7234 20.0828 14.6514C24.1266 14.5764 27.9459 17.2588 30.4183 17.2588C32.8907 17.2588 37.5321 14.0338 42.4101 14.5078C44.4517 14.5888 50.1851 15.2966 53.8649 20.4595C53.5676 20.6365 47.0242 24.2851 47.097 31.875Z"
                  fill="white"
                />
              </svg>
            </Box>
            <Box>
              <Typography variant="h4" color={colors.gray[100]}>
                Download on the
              </Typography>
              <Typography
                variant="h3"
                fontSize="30px"
                color={colors.gray[100]}
                fontWeight="bold"
              >
                App Store
              </Typography>
            </Box>
          </Box>
          {/* google-store */}
          <Box
            display="flex"
            border="solid 2px"
            borderRadius="12.95px"
            p="20px"
            gap="10px"
            borderColor={colors.gray[100]}
            alignItems="center"
          >
            <Box>
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.1338 27.1875L40.0088 18.75L9.44629 2.25C9.25879 2.0625 8.88379 2.0625 8.32129 1.875L32.1338 27.1875Z"
                  fill="white"
                />
                <path
                  d="M43.3838 39.375L54.4463 33.375C55.7588 32.625 56.5088 31.5 56.5088 30C56.5088 28.5 55.7588 27.1875 54.4463 26.625L43.3838 20.625L34.5713 30L43.3838 39.375Z"
                  fill="white"
                />
                <path
                  d="M4.75879 3.5625C4.19629 4.125 4.00879 4.875 4.00879 5.625V54.375C4.00879 55.125 4.19629 55.875 4.75879 56.625L29.5088 30L4.75879 3.5625Z"
                  fill="white"
                />
                <path
                  d="M32.1338 32.8125L8.32129 58.125C8.69629 58.125 9.07129 57.9375 9.44629 57.75L40.0088 41.25L32.1338 32.8125Z"
                  fill="white"
                />
              </svg>
            </Box>
            <Box>
              <Typography variant="h4" color={colors.gray[100]}>
                Download on the
              </Typography>
              <Typography
                variant="h3"
                fontSize="30px"
                color={colors.gray[100]}
                fontWeight="bold"
              >
                Google Play
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box my="-60px">
        <Box>
          <img
            src="../../assets/phone-2.png"
            alt="download-img"
            style={{
              width: "300px",
              height: "550px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadApp;
