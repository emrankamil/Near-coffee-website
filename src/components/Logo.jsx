import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';
import React from 'react'

function Logo() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Box>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_267_24)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.8465 14.8319C44.6412 15.0545 45.191 15.7772 45.1944 16.6019C45.2151 16.6545 45.2154 16.6858 45.2154 16.6858C45.2154 16.6858 45.2066 23.7493 36.843 30.2515C33.7337 32.6684 31.0015 36.468 29.9656 40.1721C29.7628 40.8881 29.153 41.4137 28.4156 41.5106C27.678 41.6066 26.9536 41.2554 26.5735 40.6162C24.4363 36.8993 22.624 30.8301 26.6959 23.7691C30.6647 16.8879 37.9119 13.2894 43.8465 14.8319Z"
              fill="#673D25"
              fillOpacity="0.8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.9229 46.1832C32.1043 45.9579 31.5354 45.2145 31.5319 44.3651C31.5107 44.3354 31.5102 44.3183 31.5102 44.3183C31.5102 44.3183 31.519 37.2548 39.8825 30.7526C43.0211 28.3126 45.7751 24.4643 46.7886 20.7272C46.9806 20.0297 47.5688 19.514 48.2858 19.4149C49.0019 19.3161 49.7083 19.653 50.0817 20.2722C52.2502 23.9762 54.1448 30.0992 50.0297 37.235C46.0705 44.0995 38.8494 47.697 32.9229 46.1832Z"
              fill="#673D25"
              fillOpacity="0.8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.4726 46.0479C23.2882 46.0376 23.9979 45.4873 24.2126 44.7007C24.2482 44.6463 24.2576 44.6116 24.2576 44.6116C24.2576 44.6116 26.0773 37.7857 19.6817 29.3416C17.3117 26.2122 15.6598 21.8538 15.6073 18.0166C15.5932 17.2657 15.1348 16.5954 14.4392 16.3104C13.7445 16.0254 12.9466 16.181 12.4095 16.706C9.39352 19.75 6.10477 25.1322 8.20289 32.9763C10.257 40.6572 16.3348 46.0113 22.4726 46.0479ZM26.7279 41.9444C27.4545 42.3607 28.0517 42.5351 28.9114 42.3888C28.5486 43.256 28.0113 43.8973 27.4976 44.3529C27.2632 44.5376 26.9398 44.5629 26.6801 44.4166C26.4195 44.2713 26.2723 43.9826 26.3079 43.6863C26.3314 43.2138 26.4448 42.6523 26.7279 41.9444ZM29.9623 17.9594C23.1917 22.9244 23.1392 30.2125 22.8645 29.8497C16.4689 21.4047 18.1732 14.3735 18.1732 14.3735C18.1732 14.3735 18.1835 14.335 18.2004 14.2722C18.4151 13.4857 19.1192 12.9307 19.9348 12.9072C23.5714 12.9504 27.1892 14.8319 29.9623 17.9594Z"
              fill="#673D25"
            />
          </g>
          <defs>
            <clipPath id="clip0_267_24">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>
      <Typography
        variant="h2"
        color={colors.gray[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        Near Coffee
      </Typography>
    </Box>
  );
}

export default Logo