import "@fontsource/poppins"
import { createTheme, alpha } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const theme = (mode: PaletteMode) => createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
		h6: {
			fontSize: '1.5rem'
		},
		subtitle1: {
			fontSize: '1.1rem'
		}
    },
    palette: {
		mode: mode,
		primary: {
			main: '#161B24'
		},
		secondary: {
			main: '#fff'
		},
		text: {
			primary: (mode === 'dark') ? '#fff' : '#161B24',
			secondary: '#757E8A'
		},
		divider: '#ccc',
		background: {
			default: (mode === 'dark') ? '#161B24' : '#EDF0F'
		}
	},
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '8px 24px',
                    textTransform: 'unset',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    borderRadius: '100px',
                    gap: '8px',
                    boxShadown: '0px 2px 12px rgba(161, 103, 201, 0.36);'
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backdropFilter: "blur(4px)"
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: ({ theme }) => ({
                    border: '1px solid #ccc',
                    borderRadius: '100px !important',
                    padding: '10px 12px',
                    transition: theme.transitions.create([
                        'border-color',
                        'background-color',
                        'box-shadow',
                    ]),
                    '&.Mui-focused': {
                        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                        borderColor: theme.palette.primary.main,
                    }
                })
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    lineHeight: '22px',
                    fontWeight: 500,
                    fontSize: '20px',
                    marginLeft: '-1rem',
                    color: '#858585'
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: '100%'
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    fontWeight: 500
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '& .MuiDialogContent-root': {
                        padding: theme.spacing(2),
                    },
                    '& .MuiDialog-paper': {
                        borderRadius: '16px',
                        maxWidth: 'fit-content'
                    },
                    '& .MuiDialogActions-root': {
                        padding: theme.spacing(1),
                    },
                })
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '& .MuiDivider-wrapper': {
                        color: theme.palette.divider
                    }
                })
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontWeight: 500
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: () => ({
                    backgroundColor: '#fff',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)',
                    borderRadius: '5px',
                    fontSize: '12px',
                    fontWeight: 400,
                    padding: '12px',
                    lineHeight: '16px',
                    maxWidth: '160px'
                })
            }
        },
        MuiLink: {
            styleOverrides: {
                root:({ theme }) => ({
                    '&:hover': {
						color: (mode === 'dark')
							? `${alpha(theme.palette.secondary.main, 0.8)}`
							: `${alpha(theme.palette.primary.main, 0.8)}`
					}
                })
            }
        }
    }
});

export default theme;
