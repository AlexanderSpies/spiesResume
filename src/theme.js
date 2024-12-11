import { Theme } from "@chakra-ui/react"
const theme = Theme({
  colors: {
    brand: {
      50: "#f0f5fb",
      100: "#d4ddec",
      200: "#b3c2de",
      300: "#90a7ce",
      400: "#6d8cbc",
      500: "#536FA4",
      600: "#40577f",
      700: "#2e405b",
      800: "#1c2836",
      900: "#0b1014",
    },
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923",
    },
    accent: {
      500: "#4DB6AC",
    },
    linkedin: {
      500: "#3182CE", 
    },
    javascript: {
      500: "#f0db4f", 
    },
  },
  components: {
    Card: {
      baseStyle: {
        root: {
          p: 4,
          shadow: "xl",
          bgColor: "gray.200",
        },
        body: {
          mt: 4,
        },
        title: {
          fontWeight: "bold",
          color: "gray.700",
        },
        description: {
          fontSize: "lg",
          color: "gray.700",
        },
      },
    },
    Avatar: {
      baseStyle: {
        boxSize: "120px",
        shadow: "md",
        borderRadius: "full",
      },
    },
    Blockquote: {
      baseStyle: {
        p: 4,
        borderLeft: "4px solid",
        borderColor: "gray.400",
        fontStyle: "italic",
        color: "gray.700",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.700",
      },
    },
    Link: {
      baseStyle: {
        color: "linkedin.500",
        textDecoration: "underline",
        _hover: {
          color: "linkedin.600",
        },
      },
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "gray.50",
        color: "gray.700",
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
});

export default theme;
