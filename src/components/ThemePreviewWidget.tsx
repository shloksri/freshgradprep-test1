import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Fade,
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { themeList } from '../theme/colorThemes';
import type { ColorTheme } from '../theme/colorThemes';

interface ThemePreviewWidgetProps {
  activeColors: ColorTheme;
  onThemeChange: (colors: ColorTheme) => void;
}

const ThemePreviewWidget = ({ activeColors, onThemeChange }: ThemePreviewWidgetProps) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const isActive = (colors: ColorTheme) =>
    colors.primary === activeColors.primary &&
    colors.secondary === activeColors.secondary &&
    colors.accent === activeColors.accent &&
    colors.highlight === activeColors.highlight;

  return (
    <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      {/* Expanded panel */}
      <Fade in={open}>
        <Paper
          ref={panelRef}
          elevation={8}
          sx={{
            position: 'absolute',
            bottom: 56,
            right: 0,
            width: 280,
            maxHeight: 'min(420px, calc(100vh - 120px))',
            overflowY: 'auto',
            borderRadius: 3,
            p: 1.5,
            backgroundColor: '#fafafa',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#888',
              px: 1,
              pt: 0.5,
              pb: 1,
            }}
          >
            Preview Themes
          </Typography>

          {themeList.map((entry) => {
            const active = isActive(entry.colors);
            return (
              <Box
                key={entry.name}
                onClick={() => {
                  onThemeChange(entry.colors);
                }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1.5,
                  px: 1.5,
                  py: 1.2,
                  borderRadius: 2,
                  cursor: 'pointer',
                  backgroundColor: active ? 'rgba(4,58,126,0.07)' : 'transparent',
                  border: '1.5px solid',
                  borderColor: active ? 'rgba(4,58,126,0.3)' : 'transparent',
                  transition: 'all 0.15s ease',
                  '&:hover': {
                    backgroundColor: active
                      ? 'rgba(4,58,126,0.1)'
                      : 'rgba(0,0,0,0.04)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.82rem',
                    fontWeight: active ? 700 : 500,
                    color: '#333',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {entry.name}
                </Typography>

                <Box sx={{ display: 'flex', gap: 0.6, flexShrink: 0 }}>
                  {(
                    [
                      entry.colors.primary,
                      entry.colors.secondary,
                      entry.colors.accent,
                      entry.colors.highlight,
                    ] as string[]
                  ).map((color, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        backgroundColor: color,
                        border: '1.5px solid rgba(0,0,0,0.1)',
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            );
          })}
        </Paper>
      </Fade>

      {/* Toggle button */}
      <Box
        component="button"
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Preview themes"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          px: 2,
          py: 1.2,
          border: '1px solid rgba(0,0,0,0.12)',
          borderRadius: 10,
          backgroundColor: open ? '#333' : '#fff',
          color: open ? '#fff' : '#555',
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '0.8rem',
          fontWeight: 600,
          '&:hover': {
            boxShadow: '0 4px 18px rgba(0,0,0,0.15)',
            backgroundColor: open ? '#444' : '#f5f5f5',
          },
        }}
      >
        <PaletteIcon sx={{ fontSize: 18 }} />
        Preview Themes
      </Box>
    </Box>
  );
};

export default ThemePreviewWidget;
