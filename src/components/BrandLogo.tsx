import React, { useState, useEffect } from 'react';
import { Upload, RotateCcw } from 'lucide-react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'badge-only' | 'footer';
  className?: string;
  allowCustomUpload?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  allowCustomUpload = false,
}) => {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('four_eleven_custom_logo');
    if (saved) {
      setCustomLogoUrl(saved);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomLogoUrl(result);
        localStorage.setItem('four_eleven_custom_logo', result);
        setShowUploadModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setCustomLogoUrl(null);
    localStorage.removeItem('four_eleven_custom_logo');
  };

  return (
    <div className={`relative inline-flex items-center gap-3 group ${className}`}>
      {customLogoUrl ? (
        <div className="flex items-center gap-3">
          <img
            src={customLogoUrl}
            alt="FOUR ELEVEN CAR GARAGE"
            className="h-10 w-auto max-w-[180px] object-contain drop-shadow-[0_0_12px_rgba(225,29,72,0.4)]"
            referrerPolicy="no-referrer"
          />
          {variant !== 'badge-only' && (
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-display font-extrabold text-lg tracking-wider text-metallic-silver leading-none">
                FOUR ELEVEN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-red-500 font-bold uppercase mt-0.5">
                CAR GARAGE
              </span>
            </div>
          )}
        </div>
      ) : (
        /* Bespoke Luxury Emblem for FOUR ELEVEN CAR GARAGE */
        <div className="flex items-center gap-3">
          {/* Aerodynamic 411 Shield Monogram */}
          <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_15px_rgba(225,29,72,0.35)] transition-transform duration-300 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Hex/Aerodynamic Shield Contour */}
              <defs>
                <linearGradient id="silverSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#cbd5e1" />
                  <stop offset="70%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="redAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff4d4d" />
                  <stop offset="50%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#991b1b" />
                </linearGradient>
                <linearGradient id="darkCore" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e2229" />
                  <stop offset="100%" stopColor="#0a0b0e" />
                </linearGradient>
              </defs>

              {/* Shield Outline with Metallic Bevel */}
              <path
                d="M50 4L90 20V52C90 74 72 91 50 97C28 91 10 74 10 52V20L50 4Z"
                fill="url(#darkCore)"
                stroke="url(#silverSheen)"
                strokeWidth="3.5"
              />

              {/* Red Aerodynamic Racing Wings */}
              <path
                d="M50 14L80 26V48C80 64 68 78 50 84C32 78 20 64 20 48V26L50 14Z"
                fill="none"
                stroke="url(#redAccent)"
                strokeWidth="1.75"
                opacity="0.85"
              />

              {/* Stylized "411" Geometric Mark */}
              {/* Number 4 */}
              <path
                d="M34 32L24 50H37V59H42V50H45V45H42V32H34ZM37 45H31L37 36.5V45Z"
                fill="url(#silverSheen)"
              />
              {/* First 1 */}
              <path
                d="M51 35L47 38V42L51 39.5V59H56V35H51Z"
                fill="url(#silverSheen)"
              />
              {/* Second 1 with Red Racing Blade */}
              <path
                d="M66 35L62 38V42L66 39.5V59H71V35H66Z"
                fill="url(#redAccent)"
              />
              {/* Bottom Twin Speed Chevrons */}
              <path d="M42 88L50 93L58 88" stroke="url(#silverSheen)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Typography */}
          {variant !== 'badge-only' && (
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl tracking-tight text-white leading-none">
                  FOUR
                </span>
                <span className="font-display font-black text-xl tracking-tight text-red-500 leading-none">
                  ELEVEN
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-[2px] w-3 bg-red-600 rounded-full" />
                <span className="text-[10px] tracking-[0.28em] text-slate-300 font-bold uppercase">
                  CAR GARAGE
                </span>
                <span className="h-[2px] w-3 bg-slate-600 rounded-full" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Subtle Logo Upload / Switcher Trigger */}
      {allowCustomUpload && (
        <div className="relative ml-1">
          <button
            type="button"
            id="brand-logo-custom-toggle-btn"
            onClick={() => setShowUploadModal(!showUploadModal)}
            title="Custom logo image options"
            className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs border border-white/10"
          >
            <Upload className="w-3.5 h-3.5" />
          </button>

          {showUploadModal && (
            <div className="absolute top-full left-0 mt-2 p-3 bg-[#111318] border border-white/20 rounded-lg shadow-2xl z-50 w-64 backdrop-blur-md">
              <p className="text-xs text-slate-200 font-semibold mb-2">Brand Identity Logo</p>
              <p className="text-[11px] text-slate-400 mb-3">
                Upload your exact PNG or SVG logo to display across the site.
              </p>
              <label className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-medium cursor-pointer transition-colors mb-2">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Logo File</span>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/svg+xml, image/webp"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              {customLogoUrl && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center justify-center gap-1.5 w-full py-1.5 text-xs text-slate-400 hover:text-red-400 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restore Default Crest</span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
