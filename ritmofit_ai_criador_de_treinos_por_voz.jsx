import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Mic,
  MicOff,
  Sparkles,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Volume2,
  VolumeX,
  Dumbbell,
  Clock,
  Repeat,
  Save,
  FolderOpen,
  Wand2,
  Check,
  Edit3,
  ChevronRight,
  Flame,
  Zap,
  Loader2,
  Copy,
  X,
  Lock,
  Unlock,
  Star,
  Search,
  History,
  Download,
  Upload,
  Share2,
  FilePlus,
  Undo2,
  Bell,
  Vibrate,
  Calendar,
  Award,
  SlidersHorizontal
} from 'lucide-react';

// ============================================================================
// 1. BIBLIOTECA DE ILUSTRAÇÕES ANIMADAS (SVG DINÂMICOS COM MOVIMENTO)
// ============================================================================
const VISUAL_CATALOG = [
  { key: 'skipping_slow', label: 'Saltitando Devagar / Corda', category: 'cardio' },
  { key: 'high_knees', label: 'Correndo no Lugar', category: 'cardio' },
  { key: 'jumping_jacks', label: 'Polichinelo', category: 'cardio' },
  { key: 'rest', label: 'Descanso / Respirar', category: 'rest' },
  { key: 'squats', label: 'Agachamento', category: 'strength' },
  { key: 'pushups', label: 'Flexão de Braço', category: 'strength' },
  { key: 'plank', label: 'Prancha Abdominal', category: 'core' },
  { key: 'burpees', label: 'Burpee', category: 'cardio' },
  { key: 'shadow_boxing', label: 'Sombra / Boxe', category: 'cardio' },
  { key: 'crunches', label: 'Abdominal', category: 'core' },
  { key: 'lunges', label: 'Afundo / Passada', category: 'strength' },
  { key: 'stretching', label: 'Alongamento / Mobilidade', category: 'warmup' },
  { key: 'generic_cardio', label: 'Cardio Geral', category: 'cardio' },
];

const ExerciseIllustration = ({ visualKey, customImageUrl, isPaused = false, size = 'lg', type = 'work' }) => {
  const accentColor =
    type === 'rest' ? '#38bdf8' : type === 'warmup' ? '#fbbf24' : '#10b981';
  const secondaryColor =
    type === 'rest' ? '#0284c7' : type === 'warmup' ? '#d97706' : '#059669';

  if (customImageUrl) {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900/90 border border-slate-700/60">
        <img
          src={customImageUrl}
          alt="Ilustração do exercício"
          className={`w-full h-full object-cover transition-transform duration-700 ${
            !isPaused ? 'scale-105' : 'scale-100 opacity-80'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  const animState = isPaused ? 'paused' : 'running';

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-800/60 to-slate-900/90 rounded-2xl border border-slate-700/50 overflow-hidden p-4 select-none">
      {/* Glow de fundo */}
      <div
        className="absolute w-3/4 h-3/4 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: accentColor }}
      />

      <style>{`
        @keyframes hopSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes ropeSwing {
          0% { d: path("M 65 110 Q 100 20 135 110"); opacity: 0.85; }
          50% { d: path("M 65 110 Q 100 195 135 110"); opacity: 0.95; }
          100% { d: path("M 65 110 Q 100 20 135 110"); opacity: 0.85; }
        }
        @keyframes kneeLeft {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(-12deg); }
        }
        @keyframes kneeRight {
          0%, 100% { transform: translateY(-22px) rotate(12deg); }
          50% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes armPumpLeft {
          0%, 100% { transform: rotate(25deg); }
          50% { transform: rotate(-35deg); }
        }
        @keyframes armPumpRight {
          0%, 100% { transform: rotate(-35deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes jackArmsLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-115deg); }
        }
        @keyframes jackArmsRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(115deg); }
        }
        @keyframes jackLegsLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(24deg); }
        }
        @keyframes jackLegsRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-24deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.12); opacity: 1; }
        }
        @keyframes squatDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(28px); }
        }
        @keyframes pushupBody {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          50% { transform: rotate(8deg) translateY(16px); }
        }
        @keyframes punchLeft {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(26px); }
        }
        @keyframes punchRight {
          0%, 100% { transform: translateX(22px); }
          50% { transform: translateX(0px); }
        }
        @keyframes pulseGlow {
          0%, 100% { r: 62px; opacity: 0.15; }
          50% { r: 78px; opacity: 0.3; }
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-[240px] max-h-[240px] drop-shadow-lg"
      >
        {/* Piso base */}
        <line
          x1="35"
          y1="175"
          x2="165"
          y2="175"
          stroke="#475569"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* 1. SALTITANDO DEVAGAR */}
        {visualKey === 'skipping_slow' && (
          <g style={{ animation: 'hopSlow 0.9s ease-in-out infinite', animationPlayState: animState }}>
            {/* Arco de corda / movimento */}
            <path
              d="M 60 112 Q 100 25 140 112"
              fill="none"
              stroke={accentColor}
              strokeWidth="3"
              strokeDasharray="5 5"
              opacity="0.65"
            />
            {/* Cabeça */}
            <circle cx="100" cy="52" r="14" fill={accentColor} />
            {/* Tronco */}
            <line x1="100" y1="68" x2="100" y2="120" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
            {/* Braços abertos leves */}
            <path d="M 100 80 L 72 108 L 60 105" fill="none" stroke="#e2e8f0" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 100 80 L 128 108 L 140 105" fill="none" stroke="#e2e8f0" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            {/* Pernas saltitando juntas */}
            <path d="M 94 120 L 90 148 L 93 166" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 106 120 L 110 148 L 107 166" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Ondinhas de impulso nos pés */}
            <path d="M 78 170 Q 100 162 122 170" fill="none" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
          </g>
        )}

        {/* 2. CORRENDO SEM SAIR DO LUGAR (HIGH KNEES) */}
        {visualKey === 'high_knees' && (
          <g>
            {/* Cabeça */}
            <circle
              cx="100"
              cy="46"
              r="14"
              fill={accentColor}
              style={{ animation: 'hopSlow 0.45s ease-in-out infinite', animationPlayState: animState }}
            />
            {/* Tronco */}
            <line x1="100" y1="64" x2="100" y2="116" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
            {/* Braço Esquerdo */}
            <g style={{ transformOrigin: '100px 76px', animation: 'armPumpLeft 0.5s ease-in-out infinite', animationPlayState: animState }}>
              <path d="M 100 76 L 76 98 L 92 112" fill="none" stroke="#cbd5e1" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {/* Braço Direito */}
            <g style={{ transformOrigin: '100px 76px', animation: 'armPumpRight 0.5s ease-in-out infinite', animationPlayState: animState }}>
              <path d="M 100 76 L 126 96 L 112 72" fill="none" stroke="#f8fafc" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {/* Perna Esquerda */}
            <g style={{ transformOrigin: '95px 116px', animation: 'kneeLeft 0.5s ease-in-out infinite', animationPlayState: animState }}>
              <path d="M 94 116 L 78 140 L 84 168" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {/* Perna Direita */}
            <g style={{ transformOrigin: '105px 116px', animation: 'kneeRight 0.5s ease-in-out infinite', animationPlayState: animState }}>
              <path d="M 106 116 L 124 140 L 118 168" fill="none" stroke={secondaryColor} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {/* Linhas de velocidade */}
            <line x1="45" y1="85" x2="62" y2="85" stroke={accentColor} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <line x1="40" y1="105" x2="58" y2="105" stroke={accentColor} strokeWidth="3" strokeLinecap="round" opacity="0.4" />
          </g>
        )}

        {/* 3. POLICHINELO (JUMPING JACKS) */}
        {visualKey === 'jumping_jacks' && (
          <g style={{ animation: 'hopSlow 0.65s ease-in-out infinite', animationPlayState: animState }}>
            {/* Arco de movimento superior */}
            <path d="M 52 55 Q 100 18 148 55" fill="none" stroke={accentColor} strokeWidth="2.5" strokeDasharray="4 4" opacity="0.5" />
            {/* Cabeça */}
            <circle cx="100" cy="52" r="14" fill={accentColor} />
            {/* Tronco */}
            <line x1="100" y1="68" x2="100" y2="118" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
            {/* Braço Esquerdo */}
            <g style={{ transformOrigin: '96px 76px', animation: 'jackArmsLeft 0.65s ease-in-out infinite', animationPlayState: animState }}>
              <line x1="96" y1="76" x2="72" y2="114" stroke="#f8fafc" strokeWidth="7" strokeLinecap="round" />
            </g>
            {/* Braço Direito */}
            <g style={{ transformOrigin: '104px 76px', animation: 'jackArmsRight 0.65s ease-in-out infinite', animationPlayState: animState }}>
              <line x1="104" y1="76" x2="128" y2="114" stroke="#f8fafc" strokeWidth="7" strokeLinecap="round" />
            </g>
            {/* Perna Esquerda */}
            <g style={{ transformOrigin: '96px 118px', animation: 'jackLegsLeft 0.65s ease-in-out infinite', animationPlayState: animState }}>
              <line x1="96" y1="118" x2="90" y2="168" stroke={accentColor} strokeWidth="8.5" strokeLinecap="round" />
            </g>
            {/* Perna Direita */}
            <g style={{ transformOrigin: '104px 118px', animation: 'jackLegsRight 0.65s ease-in-out infinite', animationPlayState: animState }}>
              <line x1="104" y1="118" x2="110" y2="168" stroke={accentColor} strokeWidth="8.5" strokeLinecap="round" />
            </g>
          </g>
        )}

        {/* 4. DESCANSO / RESPIRAÇÃO */}
        {visualKey === 'rest' && (
          <g>
            <circle
              cx="100"
              cy="98"
              r="65"
              fill={accentColor}
              style={{ animation: 'pulseGlow 3s ease-in-out infinite', animationPlayState: animState }}
            />
            <g style={{ transformOrigin: '100px 105px', animation: 'breathe 3s ease-in-out infinite', animationPlayState: animState }}>
              {/* Cabeça relaxada */}
              <circle cx="100" cy="54" r="14" fill="#38bdf8" />
              {/* Tronco */}
              <line x1="100" y1="72" x2="100" y2="122" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
              {/* Braços na cintura respirando */}
              <path d="M 100 78 L 74 98 L 90 115" fill="none" stroke="#bae6fd" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 100 78 L 126 98 L 110 115" fill="none" stroke="#bae6fd" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              {/* Pernas em base confortável */}
              <line x1="96" y1="122" x2="84" y2="170" stroke="#38bdf8" strokeWidth="8.5" strokeLinecap="round" />
              <line x1="104" y1="122" x2="116" y2="170" stroke="#38bdf8" strokeWidth="8.5" strokeLinecap="round" />
            </g>
            {/* Ícone de brisa/oxigênio */}
            <path d="M 135 55 Q 150 48 160 55" fill="none" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" />
            <path d="M 140 65 Q 155 58 165 65" fill="none" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {/* 5. AGACHAMENTO (SQUATS) */}
        {visualKey === 'squats' && (
          <g>
            <g style={{ animation: 'squatDown 1.4s ease-in-out infinite', animationPlayState: animState }}>
              <circle cx="100" cy="48" r="14" fill={accentColor} />
              <line x1="100" y1="64" x2="94" y2="114" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
              {/* Braços estendidos à frente para equilíbrio */}
              <line x1="98" y1="76" x2="142" y2="76" stroke="#e2e8f0" strokeWidth="7" strokeLinecap="round" />
              {/* Coxas */}
              <line x1="94" y1="114" x2="122" y2="134" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
            </g>
            {/* Canelas fixas ao chão */}
            <line x1="120" y1="138" x2="112" y2="170" stroke={accentColor} strokeWidth="8.5" strokeLinecap="round" />
            <line x1="96" y1="138" x2="90" y2="170" stroke={secondaryColor} strokeWidth="8.5" strokeLinecap="round" />
          </g>
        )}

        {/* 6. FLEXÃO DE BRAÇO (PUSHUPS) */}
        {visualKey === 'pushups' && (
          <g>
            <g style={{ transformOrigin: '55px 165px', animation: 'pushupBody 1.2s ease-in-out infinite', animationPlayState: animState }}>
              {/* Cabeça */}
              <circle cx="152" cy="112" r="12" fill={accentColor} />
              {/* Corpo reto em prancha */}
              <line x1="55" y1="162" x2="138" y2="120" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
              {/* Braço dobrando */}
              <path d="M 130 124 L 138 148 L 135 170" fill="none" stroke={accentColor} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        )}

        {/* 7. PRANCHA ABDOMINAL (PLANK) */}
        {visualKey === 'plank' && (
          <g style={{ animation: 'breathe 2s ease-in-out infinite', animationPlayState: animState }}>
            <circle cx="152" cy="126" r="12" fill={accentColor} />
            <line x1="50" y1="162" x2="136" y2="132" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
            <path d="M 128 135 L 128 168 L 146 168" fill="none" stroke={accentColor} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Ondas de tensão no core */}
            <path d="M 88 158 Q 98 166 108 152" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {/* 8. SOMBRA / BOXE (SHADOW BOXING) */}
        {visualKey === 'shadow_boxing' && (
          <g style={{ animation: 'hopSlow 0.55s ease-in-out infinite', animationPlayState: animState }}>
            <circle cx="96" cy="50" r="14" fill={accentColor} />
            <line x1="96" y1="66" x2="92" y2="118" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
            {/* Braço de jab */}
            <g style={{ animation: 'punchLeft 0.45s ease-in-out infinite', animationPlayState: animState }}>
              <line x1="96" y1="78" x2="138" y2="74" stroke="#f8fafc" strokeWidth="7.5" strokeLinecap="round" />
              <circle cx="144" cy="74" r="7" fill="#ef4444" />
            </g>
            {/* Braço de guarda */}
            <g style={{ animation: 'punchRight 0.45s ease-in-out infinite', animationPlayState: animState }}>
              <path d="M 94 82 L 114 92 L 122 76" fill="none" stroke="#cbd5e1" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="124" cy="74" r="6.5" fill="#dc2626" />
            </g>
            <line x1="90" y1="118" x2="74" y2="168" stroke={accentColor} strokeWidth="8.5" strokeLinecap="round" />
            <line x1="96" y1="118" x2="116" y2="168" stroke={accentColor} strokeWidth="8.5" strokeLinecap="round" />
          </g>
        )}

        {/* 9. DEMAIS EXERCÍCIOS (BURPEES, CRUNCHES, LUNGES, STRETCHING, GENERIC) */}
        {!['skipping_slow', 'high_knees', 'jumping_jacks', 'rest', 'squats', 'pushups', 'plank', 'shadow_boxing'].includes(visualKey) && (
          <g style={{ animation: 'hopSlow 0.7s ease-in-out infinite', animationPlayState: animState }}>
            <circle cx="100" cy="48" r="14" fill={accentColor} />
            <line x1="100" y1="64" x2="100" y2="118" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
            <path d="M 100 78 L 68 58" fill="none" stroke="#f8fafc" strokeWidth="7.5" strokeLinecap="round" />
            <path d="M 100 78 L 132 58" fill="none" stroke="#f8fafc" strokeWidth="7.5" strokeLinecap="round" />
            <path d="M 96 118 L 78 168" fill="none" stroke={accentColor} strokeWidth="8.5" strokeLinecap="round" />
            <path d="M 104 118 L 122 168" fill="none" stroke={accentColor} strokeWidth="8.5" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
};

// ============================================================================
// 2. DADOS INICIAIS (EXATAMENTE O EXEMPLO DO USUÁRIO) E PRESETS
// ============================================================================
const INITIAL_WORKOUT_STEPS = [
  {
    id: 'step-1',
    name: 'Saltitando devagar',
    durationSeconds: 60,
    type: 'warmup',
    visualKey: 'skipping_slow',
    customImageUrl: '',
    tips: 'Salte na ponta dos pés em ritmo leve, soltando os ombros e tornozelos.'
  },
  {
    id: 'step-2',
    name: 'Correndo sem sair do lugar',
    durationSeconds: 60,
    type: 'work',
    visualKey: 'high_knees',
    customImageUrl: '',
    tips: 'Mantenha o abdômen firme, coordene os braços e eleve os joelhos no seu ritmo.'
  },
  {
    id: 'step-3',
    name: 'Polichinelo',
    durationSeconds: 60,
    type: 'work',
    visualKey: 'jumping_jacks',
    customImageUrl: '',
    tips: 'Abra bem os braços acima da cabeça e amorteça a queda na ponta dos pés.'
  },
  {
    id: 'step-4',
    name: 'Descanso',
    durationSeconds: 60,
    type: 'rest',
    visualKey: 'rest',
    customImageUrl: '',
    tips: 'Caminhe devagar, puxe o ar pelo nariz e solte pela boca. Hidrate-se!'
  }
];

const PRESET_TEMPLATES = [
  {
    id: 'preset-user',
    title: 'Cardio Base (Seu Exemplo)',
    description: '1 min saltitando, 1 min corrida no lugar, 1 min polichinelo e 1 min descanso',
    rounds: 1,
    favorite: true,
    updatedAt: Date.now() - 3600000 * 5,
    steps: INITIAL_WORKOUT_STEPS
  },
  {
    id: 'preset-hiit-queima',
    title: 'HIIT Queima Rápida (45s / 15s)',
    description: 'Tiros intensos de 45s com recuperações curtas de 15s',
    rounds: 3,
    favorite: false,
    updatedAt: Date.now() - 3600000 * 12,
    steps: [
      {
        id: 'h-1',
        name: 'Polichinelo Acelerado',
        durationSeconds: 45,
        type: 'work',
        visualKey: 'jumping_jacks',
        customImageUrl: '',
        tips: 'Mantenha cadência constante do início ao fim.'
      },
      {
        id: 'h-2',
        name: 'Descanso Ativo',
        durationSeconds: 15,
        type: 'rest',
        visualKey: 'rest',
        customImageUrl: '',
        tips: 'Respire fundo e prepare-se para o próximo.'
      },
      {
        id: 'h-3',
        name: 'Agachamento Livre',
        durationSeconds: 45,
        type: 'work',
        visualKey: 'squats',
        customImageUrl: '',
        tips: 'Desça mantendo o peito aberto e calcanhares firmes no chão.'
      },
      {
        id: 'h-4',
        name: 'Descanso Ativo',
        durationSeconds: 15,
        type: 'rest',
        visualKey: 'rest',
        customImageUrl: '',
        tips: 'Solte as pernas.'
      },
      {
        id: 'h-5',
        name: 'Sombra de Boxe (Jabs Diretos)',
        durationSeconds: 45,
        type: 'work',
        visualKey: 'shadow_boxing',
        customImageUrl: '',
        tips: 'Gire o tronco e mantenha a guarda alta.'
      },
      {
        id: 'h-6',
        name: 'Recuperação Final',
        durationSeconds: 30,
        type: 'rest',
        visualKey: 'rest',
        customImageUrl: '',
        tips: 'Hidrate-se para o próximo round.'
      }
    ]
  },
  {
    id: 'preset-aquecimento',
    title: 'Despertar Matinal (3 min)',
    description: 'Mobilidade e ativação leve para começar o dia',
    rounds: 1,
    favorite: false,
    updatedAt: Date.now() - 3600000 * 24,
    steps: [
      {
        id: 'a-1',
        name: 'Alongamento Dinâmico',
        durationSeconds: 45,
        type: 'warmup',
        visualKey: 'stretching',
        customImageUrl: '',
        tips: 'Gire os braços e abra a região peitoral.'
      },
      {
        id: 'a-2',
        name: 'Saltitando bem leve',
        durationSeconds: 45,
        type: 'warmup',
        visualKey: 'skipping_slow',
        customImageUrl: '',
        tips: 'Apenas tire os calcanhares do chão suavemente.'
      },
      {
        id: 'a-3',
        name: 'Prancha Abdominal',
        durationSeconds: 45,
        type: 'work',
        visualKey: 'plank',
        customImageUrl: '',
        tips: 'Contraia o abdômen e glúteos sem prender a respiração.'
      },
      {
        id: 'a-4',
        name: 'Respiração Profunda',
        durationSeconds: 45,
        type: 'rest',
        visualKey: 'rest',
        customImageUrl: '',
        tips: 'Inspire em 4 segundos e solte devagar.'
      }
    ]
  }
];

// ============================================================================
// 3. PARSER LOCAL INTELIGENTE (FALLBACK INSTANTÂNEO EM PORTUGUÊS)
// ============================================================================
function inferExerciseDetails(rawText) {
  const lower = rawText.toLowerCase();
  if (lower.includes('descans') || lower.includes('pausa') || lower.includes('respir') || lower.includes('água')) {
    return {
      type: 'rest',
      visualKey: 'rest',
      tips: 'Respire fundo pelo nariz, solte pela boca e recupere o fôlego.'
    };
  }
  if (lower.includes('saltit') || lower.includes('corda') || lower.includes('pulando leve')) {
    return {
      type: lower.includes('devagar') || lower.includes('leve') ? 'warmup' : 'work',
      visualKey: 'skipping_slow',
      tips: 'Salte na ponta dos pés mantendo os joelhos macios.'
    };
  }
  if (lower.includes('corrend') || lower.includes('corrida') || lower.includes('joelho')) {
    return {
      type: 'work',
      visualKey: 'high_knees',
      tips: 'Coordene braços e pernas mantendo o ritmo firme.'
    };
  }
  if (lower.includes('polichinelo')) {
    return {
      type: 'work',
      visualKey: 'jumping_jacks',
      tips: 'Toque as mãos no alto e amorteça na ponta dos pés.'
    };
  }
  if (lower.includes('agachamento') || lower.includes('agachar')) {
    return {
      type: 'work',
      visualKey: 'squats',
      tips: 'Mantenha a coluna alinhada e empurre o chão com os calcanhares.'
    };
  }
  if (lower.includes('flexão') || lower.includes('flexao') || lower.includes('apoio')) {
    return {
      type: 'work',
      visualKey: 'pushups',
      tips: 'Mantenha o corpo alinhado e desça o peito próximo ao solo.'
    };
  }
  if (lower.includes('prancha')) {
    return {
      type: 'work',
      visualKey: 'plank',
      tips: 'Estabilize o abdômen sem deixar o quadril cair.'
    };
  }
  if (lower.includes('boxe') || lower.includes('sombra') || lower.includes('soco') || lower.includes('jab')) {
    return {
      type: 'work',
      visualKey: 'shadow_boxing',
      tips: 'Mantenha a guarda no queixo e solte os golpes com velocidade.'
    };
  }
  if (lower.includes('along') || lower.includes('aquec') || lower.includes('mobilidade')) {
    return {
      type: 'warmup',
      visualKey: 'stretching',
      tips: 'Faça movimentos amplos e controlados.'
    };
  }
  return {
    type: 'work',
    visualKey: 'generic_cardio',
    tips: 'Mantenha a postura firme e o foco na respiração.'
  };
}

function parseWorkoutLocally(text) {
  let detectedRounds = 1;
  const roundsMatch = text.match(/(\d+)\s*(?:rounds?|séries?|series?|voltas?|ciclos?|vezes)/i);
  if (roundsMatch) {
    detectedRounds = Math.min(20, Math.max(1, parseInt(roundsMatch[1], 10)));
  }

  // Divide por quebras de linha, vírgulas ou " e " antes de números
  const segments = text
    .replace(/\s+e\s+(?=\d+|um\b|uma\b|meio\b)/gi, '\n')
    .split(/[\n,;]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const steps = [];

  segments.forEach((seg, idx) => {
    // Ignora se for apenas declaração de rounds
    if (/^\d+\s*(?:rounds?|séries?|series?|voltas?|ciclos?)$/i.test(seg)) return;

    let durationSeconds = 60;
    let cleanName = seg;

    const minSecMatch = seg.match(
      /(\d+|um|uma|meio)\s*(minutos?|mins?|m|segundos?|segs?|s)\b(?:\s*e\s*meio)?/i
    );

    if (minSecMatch) {
      const rawNum = minSecMatch[1].toLowerCase();
      let val = rawNum === 'um' || rawNum === 'uma' ? 1 : rawNum === 'meio' ? 0.5 : parseFloat(rawNum);
      if (minSecMatch[0].toLowerCase().includes('e meio')) {
        val += 0.5;
      }
      const unit = minSecMatch[2].toLowerCase();
      if (unit.startsWith('m')) {
        durationSeconds = Math.round(val * 60);
      } else {
        durationSeconds = Math.round(val);
      }
      cleanName = seg
        .replace(minSecMatch[0], '')
        .replace(/^\s*(de|para|fazendo|com)\s+/i, '')
        .trim();
    }

    if (!cleanName) cleanName = `Exercício ${idx + 1}`;
    // Capitaliza primeira letra
    cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);

    const details = inferExerciseDetails(cleanName);

    steps.push({
      id: `local-${Date.now()}-${idx}`,
      name: cleanName,
      durationSeconds: Math.max(5, durationSeconds),
      type: details.type,
      visualKey: details.visualKey,
      customImageUrl: '',
      tips: details.tips
    });
  });

  return { rounds: detectedRounds, steps };
}

// ============================================================================
// 4. INTEGRAÇÃO COM A API GEMINI (TEXTO PARA TREINO ESTRUTURADO + IMAGEM IA)
// ============================================================================
async function fetchWithRetry(url, options, retries = 3) {
  let delay = 1000;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      if (res.ok) return await res.json();
    } catch (err) {
      // Retry silencioso
    }
    if (i < retries - 1) {
      await new Promise((r) => setTimeout(r, delay));
      delay *= 2;
    }
  }
  throw new Error('Não foi possível conectar com a IA no momento.');
}

async function generateWorkoutWithGemini(promptText) {
  const apiKey = '';
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

  const systemInstruction = `Você é um treinador de condicionamento físico brasileiro especialista em treinos intervalados (HIIT, Cardio, Boxe, Funcional).
Converta a descrição do usuário em um treino estruturado JSON.
Para cada exercício, escolha a 'visualKey' mais próxima dentre estas opções exatas:
- 'skipping_slow' (saltitar devagar, pular corda, saltitos leves)
- 'high_knees' (correr sem sair do lugar, corrida estacionária, elevar joelhos, polissapato)
- 'jumping_jacks' (polichinelo)
- 'rest' (descanso, pausa, respirar, beber água)
- 'squats' (agachamento, afundo, pernas)
- 'pushups' (flexão de braço, apoio)
- 'plank' (prancha, isometria abdominal)
- 'shadow_boxing' (boxe, sombra, socos, chute)
- 'stretching' (alongamento, aquecimento articular, mobilidade)
- 'generic_cardio' (qualquer outro exercício aeróbico ou funcional)

Classifique 'type' como 'warmup' (aquecimento/leve), 'work' (exercício principal) ou 'rest' (descanso).
Escreva uma 'tips' curta e motivadora em português (máximo 110 caracteres) explicando como executar o movimento com segurança.`;

  const payload = {
    contents: [{ role: 'user', parts: [{ text: promptText }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: 'OBJECT',
        properties: {
          workoutTitle: { type: 'STRING' },
          rounds: { type: 'INTEGER' },
          steps: {
            type: 'ARRAY',
            items: {
              type: 'OBJECT',
              properties: {
                name: { type: 'STRING' },
                durationSeconds: { type: 'INTEGER' },
                type: { type: 'STRING', enum: ['warmup', 'work', 'rest'] },
                visualKey: {
                  type: 'STRING',
                  enum: [
                    'skipping_slow',
                    'high_knees',
                    'jumping_jacks',
                    'rest',
                    'squats',
                    'pushups',
                    'plank',
                    'shadow_boxing',
                    'stretching',
                    'generic_cardio'
                  ]
                },
                tips: { type: 'STRING' }
              },
              required: ['name', 'durationSeconds', 'type', 'visualKey', 'tips']
            }
          }
        },
        required: ['workoutTitle', 'rounds', 'steps']
      }
    }
  };

  const result = await fetchWithRetry(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const jsonText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!jsonText) throw new Error('Resposta vazia da IA');
  return JSON.parse(jsonText);
}

async function generateExerciseIllustrationAI(exerciseName) {
  const apiKey = '';
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-image:generateContent?key=${apiKey}`;

  const prompt = `Clean, modern fitness instruction vector illustration of an athlete performing "${exerciseName}". Dark slate gym background, vibrant neon emerald and cyan athletic highlights, clear posture demonstration, minimalist flat style, no text.`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE']
    }
  };

  const result = await fetchWithRetry(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const base64Data = result?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)?.inlineData?.data;
  if (!base64Data) throw new Error('Não foi possível gerar a imagem.');
  return `data:image/png;base64,${base64Data}`;
}

// ============================================================================
// 5. SINTETIZADOR DE ÁUDIO DE ACADEMIA + HAPTICS (VIBRAÇÃO NO CELULAR)
// ============================================================================
class GymSoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  vibrate(pattern = [80]) {
    try {
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(pattern);
      }
    } catch (e) {}
  }

  // Bip curto de contagem regressiva (3, 2, 1)
  playCountdownPip(audioMode = 'voice_beep', vibrateEnabled = true) {
    if (vibrateEnabled) this.vibrate([40]);
    if (audioMode === 'silent') return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5
      gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) {}
  }

  // Gongo / Campainha de troca de exercício
  playTransitionBell(isRest = false, audioMode = 'voice_beep', vibrateEnabled = true) {
    if (vibrateEnabled) this.vibrate(isRest ? [120, 60, 120] : [200]);
    if (audioMode === 'silent') return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const baseFreq = isRest ? 587.33 : 1046.5; // D5 para descanso, C6 vibrante para ação
      osc.frequency.setValueAtTime(baseFreq, now);
      if (!isRest) {
        osc.frequency.setValueAtTime(baseFreq * 1.25, now + 0.12);
      }

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.56);
    } catch (e) {}
  }

  // Fanfarra de treino concluído
  playVictoryFanfare(audioMode = 'voice_beep', vibrateEnabled = true) {
    if (vibrateEnabled) this.vibrate([150, 80, 150, 80, 300]);
    if (audioMode === 'silent') return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const now = this.ctx.currentTime + i * 0.14;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.36);
      });
    } catch (e) {}
  }

  speak(text, audioMode = 'voice_beep') {
    if (audioMode !== 'voice_beep' || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'pt-BR';
      utter.rate = 1.08;
      utter.pitch = 1.0;
      window.speechSynthesis.speak(utter);
    } catch (e) {}
  }
}

const soundEngine = new GymSoundEngine();

// ============================================================================
// 6. UTILITÁRIOS DE FORMATAÇÃO
// ============================================================================
function formatTime(totalSecs) {
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function formatHumanDuration(totalSecs) {
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  if (mins > 0 && secs > 0) return `${mins}m ${secs}s`;
  if (mins > 0) return `${mins} min`;
  return `${secs} seg`;
}

function calculateWorkoutTotalSeconds(steps = [], rounds = 1) {
  const single = steps.reduce((acc, s) => acc + (Number(s.durationSeconds) || 0), 0);
  return single * (Number(rounds) || 1);
}

// ============================================================================
// 7. COMPONENTE PRINCIPAL (100% MOBILE-FIRST + CRUD COMPLETO)
// ============================================================================
export default function App() {
  // Navegação Mobile Inferior ('player' | 'builder' | 'saved' | 'history')
  const [activeTab, setActiveTab] = useState('builder');

  // Estados do Treino Atual em Edição / Execução
  const [editingWorkoutId, setEditingWorkoutId] = useState('preset-user');
  const [workoutTitle, setWorkoutTitle] = useState('Cardio Base (Seu Exemplo)');
  const [steps, setSteps] = useState(INITIAL_WORKOUT_STEPS);
  const [rounds, setRounds] = useState(1);

  // Estados do Gerador por Voz / IA
  const [voicePrompt, setVoicePrompt] = useState(
    '1 minuto saltitando devagar, 1 minuto correndo sem sair do lugar, 1 minuto de polichinelo e 1 minuto de descanso'
  );
  const [isListening, setIsListening] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [generatingImageId, setGeneratingImageId] = useState(null);
  const [statusBanner, setStatusBanner] = useState(null);

  // Undo State (Desfazer Exclusão de Treino ou Exercício)
  const [undoPayload, setUndoPayload] = useState(null); // { type: 'workout' | 'step' | 'clear_steps', data, label }

  // Estados de Rotinas Salvas (CRUD Completo)
  const [savedWorkouts, setSavedWorkouts] = useState(() => {
    try {
      const raw = localStorage.getItem('ritmofit_saved_workouts_v2');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return PRESET_TEMPLATES;
    } catch {
      return PRESET_TEMPLATES;
    }
  });

  // Filtros e Busca na aba "Meus Treinos"
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all'); // 'all' | 'favorites' | 'short' | 'long'
  const [confirmDeleteWorkoutId, setConfirmDeleteWorkoutId] = useState(null);
  const [showClearStepsConfirm, setShowClearStepsConfirm] = useState(false);
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');

  // Histórico de Treinos Concluídos
  const [workoutHistory, setWorkoutHistory] = useState(() => {
    try {
      const raw = localStorage.getItem('ritmofit_workout_history_v1');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Estados do Player Ativo (Temporizador)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_WORKOUT_STEPS[0].durationSeconds);
  const [isWorkoutFinished, setIsWorkoutFinished] = useState(false);
  const [prepCountdown, setPrepCountdown] = useState(0);
  const [defaultPrepSeconds, setDefaultPrepSeconds] = useState(5); // 5s para apoiar o celular no chão
  const [isScreenLocked, setIsScreenLocked] = useState(false); // Modo Bolso / Anti-suor
  const [audioMode, setAudioMode] = useState('voice_beep'); // 'voice_beep' | 'beep_only' | 'silent'
  const [vibrateEnabled, setVibrateEnabled] = useState(true);
  const [expandedStepId, setExpandedStepId] = useState(null); // Card aberto para edição detalhada

  const recognitionRef = useRef(null);
  const wakeLockRef = useRef(null);

  // Persistir treinos salvos no localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ritmofit_saved_workouts_v2', JSON.stringify(savedWorkouts));
    } catch (e) {}
  }, [savedWorkouts]);

  // Persistir histórico no localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ritmofit_workout_history_v1', JSON.stringify(workoutHistory));
    } catch (e) {}
  }, [workoutHistory]);

  // Wake Lock API para não apagar a tela do celular durante o treino
  useEffect(() => {
    const requestWakeLock = async () => {
      if ('wakeLock' in navigator && isPlaying && activeTab === 'player') {
        try {
          wakeLockRef.current = await navigator.wakeLock.request('screen');
        } catch (e) {}
      }
    };
    if (isPlaying && activeTab === 'player') {
      requestWakeLock();
    } else if (wakeLockRef.current) {
      wakeLockRef.current.release().catch(() => {});
      wakeLockRef.current = null;
    }
    return () => {
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
      }
    };
  }, [isPlaying, activeTab]);

  // Exibe notificação temporária com opção de Desfazer
  const showToast = (message, type = 'success', undoItem = null) => {
    setStatusBanner({ message, type });
    if (undoItem) {
      setUndoPayload(undoItem);
    } else {
      setUndoPayload(null);
    }
    setTimeout(() => {
      setStatusBanner((prev) => (prev?.message === message ? null : prev));
    }, 5000);
  };

  const handleUndo = () => {
    if (!undoPayload) return;
    if (undoPayload.type === 'workout') {
      setSavedWorkouts((prev) => [undoPayload.data, ...prev]);
      showToast(`Treino "${undoPayload.data.title}" restaurado!`, 'success');
    } else if (undoPayload.type === 'step') {
      setSteps((prev) => {
        const copy = [...prev];
        copy.splice(undoPayload.index, 0, undoPayload.data);
        return copy;
      });
      showToast(`Exercício "${undoPayload.data.name}" restaurado!`, 'success');
    } else if (undoPayload.type === 'clear_steps') {
      setSteps(undoPayload.data.steps);
      setWorkoutTitle(undoPayload.data.title);
      setRounds(undoPayload.data.rounds);
      showToast('Treino anterior restaurado!', 'success');
    }
    setUndoPayload(null);
  };

  // ==========================================================================
  // RECONHECIMENTO DE VOZ (WEB SPEECH API PT-BR)
  // ==========================================================================
  const toggleVoiceRecording = () => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast(
        'Seu navegador não suporta ditado direto. Digite ou use o microfone do teclado do celular!',
        'warning'
      );
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'pt-BR';
      recognition.continuous = true;
      recognition.interimResults = true;

      const baseText = voicePrompt ? voicePrompt.trim() + ', ' : '';

      recognition.onstart = () => {
        setIsListening(true);
        showToast('Ouvindo... Fale os exercícios e tempos!', 'info');
      };

      recognition.onresult = (event) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setVoicePrompt(baseText + transcript);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      setIsListening(false);
      showToast('Não foi possível acessar o microfone.', 'warning');
    }
  };

  // ==========================================================================
  // CRIAR TREINO A PARTIR DO TEXTO / ÁUDIO (IA + FALLBACK INSTANTÂNEO)
  // ==========================================================================
  const handleBuildFromDescription = async (useFastLocal = false) => {
    if (!voicePrompt.trim()) {
      showToast('Descreva ou dite pelo menos um exercício primeiro!', 'warning');
      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    if (useFastLocal) {
      const parsed = parseWorkoutLocally(voicePrompt);
      if (parsed.steps.length > 0) {
        setEditingWorkoutId(null);
        setSteps(parsed.steps);
        setRounds(parsed.rounds);
        setCurrentStepIndex(0);
        setSecondsLeft(parsed.steps[0].durationSeconds);
        showToast(`Sequência montada com ${parsed.steps.length} exercícios!`, 'success');
      }
      return;
    }

    setIsGeneratingAI(true);
    try {
      const aiResult = await generateWorkoutWithGemini(voicePrompt);
      if (aiResult?.steps?.length > 0) {
        const formattedSteps = aiResult.steps.map((s, idx) => ({
          id: `ai-${Date.now()}-${idx}`,
          name: s.name,
          durationSeconds: Math.max(5, Number(s.durationSeconds) || 60),
          type: s.type || 'work',
          visualKey: s.visualKey || 'generic_cardio',
          customImageUrl: '',
          tips: s.tips || 'Mantenha o ritmo constante e respire bem.'
        }));
        setEditingWorkoutId(null);
        setWorkoutTitle(aiResult.workoutTitle || 'Treino Personalizado IA');
        setRounds(Math.max(1, Number(aiResult.rounds) || 1));
        setSteps(formattedSteps);
        setCurrentStepIndex(0);
        setSecondsLeft(formattedSteps[0].durationSeconds);
        showToast('Treino estruturado com IA! Ajuste abaixo se quiser.', 'success');
      } else {
        throw new Error('Sem etapas');
      }
    } catch (error) {
      const fallback = parseWorkoutLocally(voicePrompt);
      if (fallback.steps.length > 0) {
        setEditingWorkoutId(null);
        setSteps(fallback.steps);
        setRounds(fallback.rounds);
        setCurrentStepIndex(0);
        setSecondsLeft(fallback.steps[0].durationSeconds);
        showToast('Treino montado com sucesso a partir da sua descrição!', 'success');
      }
    } finally {
      setIsGeneratingAI(false);
    }
  };

  // ==========================================================================
  // GERAR IMAGEM PERSONALIZADA COM IA PARA UM EXERCÍCIO
  // ==========================================================================
  const handleGenerateAIImageForStep = async (stepId, exerciseName) => {
    setGeneratingImageId(stepId);
    try {
      const dataUrl = await generateExerciseIllustrationAI(exerciseName);
      setSteps((prev) =>
        prev.map((item) => (item.id === stepId ? { ...item, customImageUrl: dataUrl } : item))
      );
      showToast(`Ilustração IA criada para "${exerciseName}"!`, 'success');
    } catch (err) {
      showToast('Usando animação vetorial dinâmica para este exercício.', 'info');
    } finally {
      setGeneratingImageId(null);
    }
  };

  // ==========================================================================
  // CRUD COMPLETO DE EXERCÍCIOS (ABA CRIAR / EDITAR)
  // ==========================================================================
  const updateStep = (id, field, value) => {
    setSteps((prev) =>
      prev.map((step) => {
        if (step.id !== id) return step;
        const updated = { ...step, [field]: value };
        if (field === 'name' && !step.customImageUrl) {
          const inferred = inferExerciseDetails(value);
          updated.visualKey = inferred.visualKey;
        }
        return updated;
      })
    );
  };

  const adjustStepDuration = (id, deltaSeconds) => {
    setSteps((prev) =>
      prev.map((step) => {
        if (step.id !== id) return step;
        const nextDuration = Math.max(5, step.durationSeconds + deltaSeconds);
        return { ...step, durationSeconds: nextDuration };
      })
    );
  };

  const setExactStepMinutesAndSeconds = (id, mins, secs) => {
    const m = Math.max(0, parseInt(mins || 0, 10));
    const s = Math.max(0, Math.min(59, parseInt(secs || 0, 10)));
    const total = Math.max(5, m * 60 + s);
    updateStep(id, 'durationSeconds', total);
  };

  const moveStep = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= steps.length) return;
    const copy = [...steps];
    const [moved] = copy.splice(index, 1);
    copy.splice(targetIndex, 0, moved);
    setSteps(copy);
  };

  const duplicateStep = (index) => {
    const item = steps[index];
    const clone = {
      ...item,
      id: `step-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
    };
    const copy = [...steps];
    copy.splice(index + 1, 0, clone);
    setSteps(copy);
    showToast(`"${item.name}" duplicado!`, 'info');
  };

  const removeStep = (id) => {
    if (steps.length <= 1) {
      showToast('O treino precisa ter pelo menos 1 exercício.', 'warning');
      return;
    }
    const idx = steps.findIndex((s) => s.id === id);
    const removedItem = steps[idx];
    setSteps((prev) => prev.filter((s) => s.id !== id));
    showToast(`"${removedItem.name}" removido.`, 'info', {
      type: 'step',
      index: idx,
      data: removedItem
    });
  };

  const addNewStep = (presetType = 'work') => {
    const newId = `step-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`;
    const newStep =
      presetType === 'rest'
        ? {
            id: newId,
            name: 'Descanso',
            durationSeconds: 30,
            type: 'rest',
            visualKey: 'rest',
            customImageUrl: '',
            tips: 'Respire fundo pelo nariz e recupere o fôlego.'
          }
        : presetType === 'warmup'
        ? {
            id: newId,
            name: 'Saltitando devagar',
            durationSeconds: 60,
            type: 'warmup',
            visualKey: 'skipping_slow',
            customImageUrl: '',
            tips: 'Solte as articulações em ritmo leve.'
          }
        : {
            id: newId,
            name: 'Novo Exercício',
            durationSeconds: 60,
            type: 'work',
            visualKey: 'jumping_jacks',
            customImageUrl: '',
            tips: 'Mantenha o foco na postura e cadência.'
          };
    setSteps((prev) => [...prev, newStep]);
    setExpandedStepId(newId);
  };

  const handleStartBlankWorkout = () => {
    const backup = { title: workoutTitle, rounds, steps: [...steps] };
    const initialStep = {
      id: `step-${Date.now()}`,
      name: 'Exercício 1',
      durationSeconds: 45,
      type: 'work',
      visualKey: 'jumping_jacks',
      customImageUrl: '',
      tips: 'Mantenha a postura firme.'
    };
    setEditingWorkoutId(null);
    setWorkoutTitle('Novo Treino Personalizado');
    setRounds(1);
    setSteps([initialStep]);
    setExpandedStepId(initialStep.id);
    setShowClearStepsConfirm(false);
    showToast('Novo treino em branco criado!', 'info', {
      type: 'clear_steps',
      data: backup
    });
  };

  // ==========================================================================
  // CRUD COMPLETO DE TREINOS SALVOS (ABA MEUS TREINOS)
  // ==========================================================================
  const saveWorkout = (saveAsNew = false) => {
    const cleanTitle = (workoutTitle || 'Treino Personalizado').trim();
    const description = `${steps.length} etapas • ${rounds}x série(s) • ${formatHumanDuration(
      calculateWorkoutTotalSeconds(steps, rounds)
    )}`;

    if (!saveAsNew && editingWorkoutId && savedWorkouts.some((w) => w.id === editingWorkoutId)) {
      setSavedWorkouts((prev) =>
        prev.map((w) =>
          w.id === editingWorkoutId
            ? {
                ...w,
                title: cleanTitle,
                description,
                rounds,
                steps: steps.map((s) => ({ ...s })),
                updatedAt: Date.now()
              }
            : w
        )
      );
      showToast(`Alterações salvas em "${cleanTitle}"!`, 'success');
    } else {
      const newId = `saved-${Date.now()}`;
      const newSaved = {
        id: newId,
        title: saveAsNew && editingWorkoutId ? `${cleanTitle} (Cópia)` : cleanTitle,
        description,
        rounds,
        favorite: false,
        updatedAt: Date.now(),
        steps: steps.map((s) => ({ ...s }))
      };
      setSavedWorkouts((prev) => [newSaved, ...prev]);
      setEditingWorkoutId(newId);
      setWorkoutTitle(newSaved.title);
      showToast(`"${newSaved.title}" salvo em Meus Treinos!`, 'success');
    }
  };

  const loadWorkoutIntoBuilder = (template, startImmediately = false) => {
    setEditingWorkoutId(template.id);
    setWorkoutTitle(template.title);
    setRounds(template.rounds || 1);
    const clonedSteps = template.steps.map((s, i) => ({
      ...s,
      id: `loaded-${Date.now()}-${i}`
    }));
    setSteps(clonedSteps);
    setCurrentStepIndex(0);
    setCurrentRound(1);
    setSecondsLeft(clonedSteps[0]?.durationSeconds || 60);

    if (startImmediately) {
      soundEngine.init();
      setIsWorkoutFinished(false);
      setIsScreenLocked(false);
      setPrepCountdown(defaultPrepSeconds);
      setActiveTab('player');
      setIsPlaying(true);
      soundEngine.speak(`Preparar para ${clonedSteps[0]?.name || 'treino'}`, audioMode);
    } else {
      setActiveTab('builder');
      showToast(`Editando "${template.title}"`, 'info');
    }
  };

  const duplicateSavedWorkout = (workout) => {
    const clone = {
      ...workout,
      id: `saved-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      title: `${workout.title} (Variação)`,
      updatedAt: Date.now(),
      steps: workout.steps.map((s, idx) => ({ ...s, id: `dup-${Date.now()}-${idx}` }))
    };
    setSavedWorkouts((prev) => [clone, ...prev]);
    showToast(`Cópia "${clone.title}" criada!`, 'success');
  };

  const toggleFavoriteWorkout = (id) => {
    setSavedWorkouts((prev) =>
      prev.map((w) => (w.id === id ? { ...w, favorite: !w.favorite } : w))
    );
  };

  const deleteSavedWorkout = (id) => {
    const target = savedWorkouts.find((w) => w.id === id);
    if (!target) return;
    setSavedWorkouts((prev) => prev.filter((w) => w.id !== id));
    if (editingWorkoutId === id) {
      setEditingWorkoutId(null);
    }
    setConfirmDeleteWorkoutId(null);
    showToast(`Treino "${target.title}" excluído.`, 'info', {
      type: 'workout',
      data: target
    });
  };

  const moveSavedWorkout = (id, direction) => {
    const idx = savedWorkouts.findIndex((w) => w.id === id);
    const targetIdx = idx + direction;
    if (idx < 0 || targetIdx < 0 || targetIdx >= savedWorkouts.length) return;
    const copy = [...savedWorkouts];
    const [moved] = copy.splice(idx, 1);
    copy.splice(targetIdx, 0, moved);
    setSavedWorkouts(copy);
  };

  // Exportar / Importar / Copiar Resumo
  const copyWorkoutAsReadableText = (workout) => {
    const lines = [
      `🏋️ ${workout.title.toUpperCase()} (${workout.rounds}x Série${workout.rounds > 1 ? 's' : ''})`,
      ...workout.steps.map(
        (s, i) => `${i + 1}. ${ formatHumanDuration(s.durationSeconds) } - ${s.name}`
      )
    ];
    navigator.clipboard?.writeText(lines.join('\n'));
    showToast('Treino copiado em texto para área de transferência!', 'success');
  };

  const handleExportAllJson = () => {
    const dataStr = JSON.stringify({ savedWorkouts, workoutHistory }, null, 2);
    navigator.clipboard?.writeText(dataStr);
    showToast('Código de Backup copiado! Guarde nas suas notas.', 'success');
  };

  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(importJsonText);
      if (parsed.savedWorkouts && Array.isArray(parsed.savedWorkouts)) {
        setSavedWorkouts(parsed.savedWorkouts);
        if (Array.isArray(parsed.workoutHistory)) {
          setWorkoutHistory(parsed.workoutHistory);
        }
        setImportJsonText('');
        setShowBackupModal(false);
        showToast('Backup restaurado com sucesso!', 'success');
      } else {
        showToast('Formato JSON inválido.', 'warning');
      }
    } catch {
      showToast('Erro ao ler o JSON colado.', 'warning');
    }
  };

  // Lista Filtrada e Ordenada de Treinos Salvos
  const filteredWorkouts = useMemo(() => {
    return savedWorkouts
      .filter((w) => {
        const matchesQuery =
          !searchQuery.trim() ||
          w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          w.steps.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
        if (!matchesQuery) return false;

        const totalSecs = calculateWorkoutTotalSeconds(w.steps, w.rounds);
        if (filterCategory === 'favorites') return Boolean(w.favorite);
        if (filterCategory === 'short') return totalSecs <= 300; // Até 5 min
        if (filterCategory === 'long') return totalSecs > 300; // Mais de 5 min
        return true;
      })
      .sort((a, b) => {
        if (Boolean(b.favorite) !== Boolean(a.favorite)) {
          return b.favorite ? 1 : -1;
        }
        return 0;
      });
  }, [savedWorkouts, searchQuery, filterCategory]);

  // ==========================================================================
  // LÓGICA DO TEMPORIZADOR (PLAYER ATIVO)
  // ==========================================================================
  const currentStep = steps[currentStepIndex] || steps[0];
  const nextStep = useMemo(() => {
    if (currentStepIndex + 1 < steps.length) {
      return { ...steps[currentStepIndex + 1], roundInfo: `Série ${currentRound}/${rounds}` };
    }
    if (currentRound < rounds) {
      return { ...steps[0], roundInfo: `Série ${currentRound + 1}/${rounds}` };
    }
    return null;
  }, [steps, currentStepIndex, currentRound, rounds]);

  const totalWorkoutSeconds = useMemo(
    () => calculateWorkoutTotalSeconds(steps, rounds),
    [steps, rounds]
  );

  const elapsedWorkoutSeconds = useMemo(() => {
    if (isWorkoutFinished) return totalWorkoutSeconds;
    const singleRound = steps.reduce((acc, s) => acc + s.durationSeconds, 0);
    const completedRoundsSecs = (currentRound - 1) * singleRound;
    const completedStepsInRoundSecs = steps
      .slice(0, currentStepIndex)
      .reduce((acc, s) => acc + s.durationSeconds, 0);
    const currentStepElapsed = (currentStep?.durationSeconds || 0) - secondsLeft;
    return Math.max(0, completedRoundsSecs + completedStepsInRoundSecs + currentStepElapsed);
  }, [steps, rounds, currentRound, currentStepIndex, currentStep, secondsLeft, isWorkoutFinished, totalWorkoutSeconds]);

  const startWorkoutPlayer = () => {
    soundEngine.init();
    setCurrentStepIndex(0);
    setCurrentRound(1);
    setSecondsLeft(steps[0].durationSeconds);
    setIsWorkoutFinished(false);
    setIsScreenLocked(false);
    setActiveTab('player');
    setPrepCountdown(defaultPrepSeconds);
    setIsPlaying(true);
    soundEngine.speak(`Prepare-se. Começando com ${steps[0].name}`, audioMode);
  };

  const logCompletedWorkout = () => {
    const entry = {
      id: `hist-${Date.now()}`,
      title: workoutTitle,
      totalSeconds: totalWorkoutSeconds,
      rounds,
      stepsCount: steps.length,
      completedAt: new Date().toISOString()
    };
    setWorkoutHistory((prev) => [entry, ...prev]);
  };

  // Loop de Contagem Regressiva
  useEffect(() => {
    if (!isPlaying || activeTab !== 'player' || isWorkoutFinished) return;

    const timer = setInterval(() => {
      // Contagem inicial de preparação (ex: 5, 4, 3, 2, 1)
      if (prepCountdown > 0) {
        if (prepCountdown <= 3 && prepCountdown > 1) {
          soundEngine.playCountdownPip(audioMode, vibrateEnabled);
        } else if (prepCountdown === 1) {
          soundEngine.playTransitionBell(false, audioMode, vibrateEnabled);
          soundEngine.speak(
            `Valendo! ${steps[0].name}, ${formatHumanDuration(steps[0].durationSeconds)}`,
            audioMode
          );
        }
        setPrepCountdown((prev) => prev - 1);
        return;
      }

      setSecondsLeft((prevSecs) => {
        // Bips nos últimos 3 segundos
        if (prevSecs <= 4 && prevSecs > 1) {
          soundEngine.playCountdownPip(audioMode, vibrateEnabled);
        }

        if (prevSecs > 1) {
          return prevSecs - 1;
        }

        // Avança para a próxima etapa ou próximo round
        if (currentStepIndex + 1 < steps.length) {
          const nextIdx = currentStepIndex + 1;
          const upcoming = steps[nextIdx];
          setCurrentStepIndex(nextIdx);
          soundEngine.playTransitionBell(upcoming.type === 'rest', audioMode, vibrateEnabled);
          soundEngine.speak(
            `${upcoming.name}, ${formatHumanDuration(upcoming.durationSeconds)}`,
            audioMode
          );
          return upcoming.durationSeconds;
        } else if (currentRound < rounds) {
          const firstStep = steps[0];
          setCurrentRound((r) => r + 1);
          setCurrentStepIndex(0);
          soundEngine.playTransitionBell(false, audioMode, vibrateEnabled);
          soundEngine.speak(`Série ${currentRound + 1}. ${firstStep.name}`, audioMode);
          return firstStep.durationSeconds;
        } else {
          // Treino Finalizado!
          setIsPlaying(false);
          setIsWorkoutFinished(true);
          setIsScreenLocked(false);
          logCompletedWorkout();
          soundEngine.playVictoryFanfare(audioMode, vibrateEnabled);
          soundEngine.speak('Treino concluído! Parabéns pela dedicação!', audioMode);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [
    isPlaying,
    activeTab,
    isWorkoutFinished,
    prepCountdown,
    currentStepIndex,
    currentRound,
    rounds,
    steps,
    audioMode,
    vibrateEnabled
  ]);

  const handleSkipNext = () => {
    if (isScreenLocked) return;
    setPrepCountdown(0);
    if (currentStepIndex + 1 < steps.length) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      setSecondsLeft(steps[nextIdx].durationSeconds);
      soundEngine.playTransitionBell(steps[nextIdx].type === 'rest', audioMode, vibrateEnabled);
      soundEngine.speak(steps[nextIdx].name, audioMode);
    } else if (currentRound < rounds) {
      setCurrentRound((r) => r + 1);
      setCurrentStepIndex(0);
      setSecondsLeft(steps[0].durationSeconds);
      soundEngine.playTransitionBell(false, audioMode, vibrateEnabled);
      soundEngine.speak(`Série ${currentRound + 1}. ${steps[0].name}`, audioMode);
    } else {
      setIsPlaying(false);
      setIsWorkoutFinished(true);
      logCompletedWorkout();
    }
  };

  const handleSkipPrev = () => {
    if (isScreenLocked) return;
    setPrepCountdown(0);
    if (secondsLeft < currentStep.durationSeconds - 3) {
      setSecondsLeft(currentStep.durationSeconds);
    } else if (currentStepIndex > 0) {
      const prevIdx = currentStepIndex - 1;
      setCurrentStepIndex(prevIdx);
      setSecondsLeft(steps[prevIdx].durationSeconds);
    } else if (currentRound > 1) {
      const lastIdx = steps.length - 1;
      setCurrentRound((r) => r - 1);
      setCurrentStepIndex(lastIdx);
      setSecondsLeft(steps[lastIdx].durationSeconds);
    } else {
      setSecondsLeft(steps[0].durationSeconds);
    }
  };

  const cycleAudioMode = () => {
    const order = ['voice_beep', 'beep_only', 'silent'];
    const next = order[(order.indexOf(audioMode) + 1) % order.length];
    setAudioMode(next);
    const labels = {
      voice_beep: 'Áudio: Voz + Gongo ativados',
      beep_only: 'Áudio: Só Gongo/Bips (Ideal p/ Spotify)',
      silent: 'Áudio: Silencioso (Apenas Visual/Vibração)'
    };
    showToast(labels[next], 'info');
  };

  // ==========================================================================
  // COMPONENTE DE NAVEGAÇÃO INFERIOR MOBILE (THUMB ZONE)
  // ==========================================================================
  const BottomNavigation = () => (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/90 px-2 py-1.5 select-none">
      <div className="max-w-lg mx-auto grid grid-cols-4 gap-1">
        <button
          onClick={() => setActiveTab('player')}
          className={`flex flex-col items-center justify-center py-2 rounded-2xl transition ${
            activeTab === 'player'
              ? 'bg-emerald-500/15 text-emerald-400 font-extrabold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
        >
          <Play className={`w-5 h-5 mb-0.5 ${activeTab === 'player' ? 'fill-current' : ''}`} />
          <span className="text-[11px]">Treinar</span>
        </button>

        <button
          onClick={() => {
            setIsPlaying(false);
            setActiveTab('builder');
          }}
          className={`flex flex-col items-center justify-center py-2 rounded-2xl transition ${
            activeTab === 'builder'
              ? 'bg-emerald-500/15 text-emerald-400 font-extrabold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
        >
          <Edit3 className="w-5 h-5 mb-0.5" />
          <span className="text-[11px]">Criar/Editar</span>
        </button>

        <button
          onClick={() => {
            setIsPlaying(false);
            setActiveTab('saved');
          }}
          className={`flex flex-col items-center justify-center py-2 rounded-2xl transition relative ${
            activeTab === 'saved'
              ? 'bg-emerald-500/15 text-emerald-400 font-extrabold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
        >
          <FolderOpen className="w-5 h-5 mb-0.5" />
          <span className="text-[11px]">Meus Treinos</span>
          <span className="absolute top-1.5 right-4 px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-slate-800 text-slate-300">
            {savedWorkouts.length}
          </span>
        </button>

        <button
          onClick={() => {
            setIsPlaying(false);
            setActiveTab('history');
          }}
          className={`flex flex-col items-center justify-center py-2 rounded-2xl transition relative ${
            activeTab === 'history'
              ? 'bg-emerald-500/15 text-emerald-400 font-extrabold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
        >
          <History className="w-5 h-5 mb-0.5" />
          <span className="text-[11px]">Histórico</span>
          {workoutHistory.length > 0 && (
            <span className="absolute top-1.5 right-4 px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-300">
              {workoutHistory.length}
            </span>
          )}
        </button>
      </div>
    </nav>
  );

  // ==========================================================================
  // BANNER GLOBAL DE NOTIFICAÇÃO + BOTÃO DESFAZER (UNDO)
  // ==========================================================================
  const ToastOverlay = () =>
    statusBanner ? (
      <div className="fixed top-3 inset-x-3 z-50 max-w-md mx-auto pointer-events-auto">
        <div
          className={`flex items-center justify-between gap-2 px-4 py-3 rounded-2xl shadow-2xl border backdrop-blur-xl ${
            statusBanner.type === 'warning'
              ? 'bg-amber-950/95 border-amber-500/50 text-amber-200'
              : statusBanner.type === 'info'
              ? 'bg-slate-900/95 border-cyan-500/50 text-cyan-200'
              : 'bg-emerald-950/95 border-emerald-500/50 text-emerald-200'
          }`}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <Sparkles className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold truncate">{statusBanner.message}</span>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {undoPayload && (
              <button
                onClick={handleUndo}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-extrabold transition"
              >
                <Undo2 className="w-3.5 h-3.5" />
                Desfazer
              </button>
            )}
            <button
              onClick={() => setStatusBanner(null)}
              className="p-1 opacity-70 hover:opacity-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    ) : null;

  // ==========================================================================
  // ABA 1: TELA DE TREINO EM EXECUÇÃO (100dvh MOBILE-FIRST SEM SCROLL)
  // ==========================================================================
  if (activeTab === 'player') {
    const isEndingCountdown = secondsLeft <= 3 && secondsLeft > 0 && prepCountdown === 0;

    const themeColors =
      currentStep?.type === 'rest'
        ? {
            badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
            label: 'DESCANSO • RECUPERE O FÔLEGO',
            ring: isEndingCountdown ? '#f43f5e' : '#38bdf8',
            glow: 'from-sky-500/20 via-slate-950 to-slate-950',
            btnPrimary: 'bg-sky-500 active:bg-sky-400 text-slate-950'
          }
        : currentStep?.type === 'warmup'
        ? {
            badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
            label: 'AQUECIMENTO • RITMO LEVE',
            ring: isEndingCountdown ? '#f43f5e' : '#fbbf24',
            glow: 'from-amber-500/20 via-slate-950 to-slate-950',
            btnPrimary: 'bg-amber-400 active:bg-amber-300 text-slate-950'
          }
        : {
            badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
            label: 'EM AÇÃO • EXERCÍCIO',
            ring: isEndingCountdown ? '#f43f5e' : '#10b981',
            glow: 'from-emerald-500/20 via-slate-950 to-slate-950',
            btnPrimary: 'bg-emerald-500 active:bg-emerald-400 text-slate-950'
          };

    return (
      <div
        className={`h-[100dvh] w-full overflow-hidden bg-slate-950 bg-gradient-to-b ${themeColors.glow} text-white flex flex-col justify-between pb-16 select-none`}
      >
        <ToastOverlay />

        {/* 1. Topo Compacto: Barras estilo Stories + Controles de Som e Trava */}
        <header className="w-full max-w-lg mx-auto px-3 pt-2.5 space-y-2 flex-shrink-0">
          {/* Barra Segmentada de Etapas da Série Atual */}
          <div className="flex gap-1 w-full">
            {steps.map((st, idx) => {
              let pct = 0;
              if (idx < currentStepIndex || isWorkoutFinished) pct = 100;
              else if (idx === currentStepIndex && prepCountdown === 0) {
                pct = ((st.durationSeconds - secondsLeft) / st.durationSeconds) * 100;
              }
              return (
                <div
                  key={st.id}
                  className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full transition-all duration-300 rounded-full"
                    style={{
                      width: `${Math.min(100, Math.max(0, pct))}%`,
                      backgroundColor: st.type === 'rest' ? '#38bdf8' : '#10b981'
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Linha de Status e Controles Rápidos */}
          <div className="flex items-center justify-between gap-2 bg-slate-900/80 border border-slate-800/90 px-3 py-2 rounded-2xl">
            <div className="flex items-center gap-2 min-w-0">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-extrabold text-white">
                Série {currentRound}/{rounds}
              </span>
              <span className="text-xs font-semibold text-slate-400 truncate">
                Etapa {currentStepIndex + 1} de {steps.length}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Alternador de Modo de Áudio (Voz+Gongo / Só Gongo / Mudo) */}
              <button
                onClick={cycleAudioMode}
                className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition ${
                  audioMode === 'voice_beep'
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                    : audioMode === 'beep_only'
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {audioMode === 'voice_beep' && <Volume2 className="w-4 h-4" />}
                {audioMode === 'beep_only' && <Bell className="w-4 h-4" />}
                {audioMode === 'silent' && <VolumeX className="w-4 h-4" />}
                <span>
                  {audioMode === 'voice_beep'
                    ? 'Voz'
                    : audioMode === 'beep_only'
                    ? 'Bip'
                    : 'Mudo'}
                </span>
              </button>

              {/* Vibração Haptic */}
              <button
                onClick={() => setVibrateEnabled((v) => !v)}
                className={`p-1.5 rounded-xl border transition ${
                  vibrateEnabled
                    ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300'
                    : 'bg-slate-800 border-slate-700 text-slate-500'
                }`}
                title="Vibração"
              >
                <Vibrate className="w-4 h-4" />
              </button>

              {/* Trava de Tela Anti-Suor / Bolso */}
              <button
                onClick={() => {
                  setIsScreenLocked((l) => !l);
                  showToast(
                    !isScreenLocked
                      ? 'Tela travada contra toques acidentais!'
                      : 'Tela destravada!',
                    'info'
                  );
                }}
                className={`p-1.5 rounded-xl border transition ${
                  isScreenLocked
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
                title="Travar tela"
              >
                {isScreenLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </header>

        {/* 2. Conteúdo Principal Central: Animação + Texto Gigante + Cronômetro */}
        <main className="w-full max-w-lg mx-auto px-3 flex-1 flex flex-col justify-between py-2 min-h-0">
          {isWorkoutFinished ? (
            <div className="my-auto bg-slate-900/95 border border-emerald-500/40 rounded-3xl p-6 text-center shadow-2xl space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <Flame className="w-9 h-9 text-emerald-400 animate-bounce" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Treino Concluído!</h2>
                <p className="text-slate-300 text-sm mt-1">
                  Salvo no seu histórico! Você completou{' '}
                  <span className="text-emerald-400 font-bold">{rounds}x série(s)</span> (
                  {formatHumanDuration(totalWorkoutSeconds)} no total).
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <button
                  onClick={startWorkoutPlayer}
                  className="flex items-center justify-center gap-2 bg-emerald-500 active:bg-emerald-400 text-slate-950 font-extrabold py-3.5 rounded-2xl text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  Repetir
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className="flex items-center justify-center gap-2 bg-slate-800 active:bg-slate-700 text-white font-bold py-3.5 rounded-2xl text-sm border border-slate-700"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  Ver Histórico
                </button>
              </div>
            </div>
          ) : prepCountdown > 0 ? (
            <div className="my-auto bg-slate-900/90 border border-amber-500/40 rounded-3xl p-6 text-center shadow-2xl space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-xs tracking-widest uppercase">
                APOIE O CELULAR • PREPARE-SE!
              </span>
              <div className="text-8xl font-black text-amber-400 tabular-nums animate-pulse">
                {prepCountdown}
              </div>
              <p className="text-base text-slate-200 font-bold">
                1º Exercício: <span className="text-emerald-400">{currentStep.name}</span>
              </p>
              <button
                onClick={() => setPrepCountdown(0)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300"
              >
                Pular contagem e começar já
              </button>
            </div>
          ) : (
            <>
              {/* Ilustração Animada do Movimento */}
              <div className="relative w-full flex-1 max-h-[220px] min-h-[130px] flex items-center justify-center">
                <ExerciseIllustration
                  visualKey={currentStep.visualKey}
                  customImageUrl={currentStep.customImageUrl}
                  isPaused={!isPlaying}
                  type={currentStep.type}
                />
                <span
                  className={`absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border backdrop-blur-md ${themeColors.badge}`}
                >
                  <Zap className="w-3 h-3" />
                  {themeColors.label}
                </span>
              </div>

              {/* Nome do Exercício em Letras Gigantes + Dica na Tela */}
              <div className="text-center my-1.5 px-1">
                <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight line-clamp-2">
                  {currentStep.name}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                  {currentStep.tips}
                </p>
              </div>

              {/* Display Gigante do Cronômetro + Botões Rápidos de Ajuste */}
              <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl px-4 py-3 flex items-center justify-between gap-2 shadow-xl">
                <button
                  disabled={isScreenLocked}
                  onClick={() => setSecondsLeft((s) => Math.max(5, s - 10))}
                  className="px-3 py-3 rounded-2xl bg-slate-800 active:bg-slate-700 text-xs font-extrabold text-slate-300 border border-slate-700 disabled:opacity-30"
                >
                  -10s
                </button>

                <div
                  className={`text-6xl sm:text-7xl font-black tabular-nums tracking-tighter leading-none transition-transform ${
                    isEndingCountdown ? 'scale-110 animate-pulse' : ''
                  }`}
                  style={{ color: themeColors.ring }}
                >
                  {formatTime(secondsLeft)}
                </div>

                <button
                  disabled={isScreenLocked}
                  onClick={() => setSecondsLeft((s) => s + 15)}
                  className="px-3 py-3 rounded-2xl bg-slate-800 active:bg-slate-700 text-xs font-extrabold text-emerald-300 border border-slate-700 disabled:opacity-30"
                >
                  +15s
                </button>
              </div>

              {/* Pill "A SEGUIR" sempre visível */}
              <div className="bg-slate-900/75 border border-slate-800/80 px-3.5 py-2 rounded-2xl flex items-center justify-between gap-2">
                {nextStep ? (
                  <>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        A SEGUIR
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-white truncate">
                        {nextStep.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 flex-shrink-0">
                      {formatHumanDuration(nextStep.durationSeconds)}
                    </span>
                  </>
                ) : (
                  <span className="text-xs font-extrabold text-emerald-400 mx-auto">
                    🏁 Reta final! Último exercício do treino!
                  </span>
                )}
              </div>

              {/* Controles Grandes na Zona do Polegar */}
              <div className="pt-1">
                {isScreenLocked ? (
                  <button
                    onClick={() => setIsScreenLocked(false)}
                    className="w-full py-4 rounded-2xl bg-amber-500/20 border-2 border-amber-500/60 text-amber-300 font-black text-sm flex items-center justify-center gap-2"
                  >
                    <Lock className="w-5 h-5" />
                    TELA TRAVADA (TOQUE PARA DESTRAVAR)
                  </button>
                ) : (
                  <div className="grid grid-cols-12 gap-2 items-center">
                    <button
                      onClick={handleSkipPrev}
                      className="col-span-3 flex items-center justify-center py-4 rounded-2xl bg-slate-900 active:bg-slate-800 border border-slate-800 text-slate-200"
                    >
                      <SkipBack className="w-6 h-6" />
                    </button>

                    <button
                      onClick={() => setIsPlaying((p) => !p)}
                      className={`col-span-6 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-base shadow-lg ${themeColors.btnPrimary}`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-6 h-6 fill-current" />
                          PAUSAR
                        </>
                      ) : (
                        <>
                          <Play className="w-6 h-6 fill-current" />
                          INICIAR
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleSkipNext}
                      className="col-span-3 flex items-center justify-center py-4 rounded-2xl bg-slate-900 active:bg-slate-800 border border-slate-800 text-slate-200"
                    >
                      <SkipForward className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </main>

        <BottomNavigation />
      </div>
    );
  }

  // ==========================================================================
  // ABA 3: MEUS TREINOS (CRUD COMPLETO: FAVORITAR, EDITAR, DUPLICAR, EXCLUIR, BUSCAR, BACKUP)
  // ==========================================================================
  if (activeTab === 'saved') {
    return (
      <div className="min-h-[100dvh] bg-slate-950 text-slate-100 pb-24">
        <ToastOverlay />

        <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3.5">
          <div className="max-w-lg mx-auto flex items-center justify-between gap-2">
            <div>
              <h1 className="text-lg font-black text-white flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-emerald-400" />
                Meus Treinos Salvos
              </h1>
              <p className="text-xs text-slate-400">
                Inicie, edite, duplique ou exclua suas combinações
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowBackupModal(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                Backup
              </button>
              <button
                onClick={() => {
                  handleStartBlankWorkout();
                  setActiveTab('builder');
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-extrabold"
              >
                <Plus className="w-4 h-4" />
                Novo
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-lg mx-auto px-4 pt-4 space-y-4">
          {/* Busca + Filtros Rápidos */}
          <div className="space-y-2.5">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar treino ou exercício (ex: polichinelo, boxe)..."
                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {[
                { id: 'all', label: `Todos (${savedWorkouts.length})` },
                { id: 'favorites', label: '⭐ Favoritos' },
                { id: 'short', label: '⚡ Rápidos (≤ 5 min)' },
                { id: 'long', label: '🔥 Longos (> 5 min)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap border transition ${
                    filterCategory === tab.id
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Lista de Cards de Treinos Salvos */}
          {filteredWorkouts.length === 0 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
              <Dumbbell className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-sm font-bold text-slate-300">Nenhum treino encontrado</p>
              <p className="text-xs text-slate-500">
                Crie um novo treino por voz ou limpe o filtro de busca acima.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredWorkouts.map((workout, idx) => {
                const totalSecs = calculateWorkoutTotalSeconds(workout.steps, workout.rounds);
                const isConfirmingDelete = confirmDeleteWorkoutId === workout.id;

                return (
                  <div
                    key={workout.id}
                    className={`bg-slate-900/90 border rounded-3xl p-4 space-y-3 transition ${
                      editingWorkoutId === workout.id
                        ? 'border-emerald-500/60'
                        : 'border-slate-800'
                    }`}
                  >
                    {/* Cabeçalho do Card */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-extrabold text-white text-base truncate">
                            {workout.title}
                          </h3>
                          {editingWorkoutId === workout.id && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                              Ativo
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {workout.steps.length} exercícios • {workout.rounds || 1}x série(s) •{' '}
                          <span className="text-emerald-400 font-bold">
                            {formatHumanDuration(totalSecs)}
                          </span>
                        </p>
                      </div>

                      {/* Botões Favoritar + Subir/Descer */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={() => toggleFavoriteWorkout(workout.id)}
                          className={`p-2 rounded-xl border transition ${
                            workout.favorite
                              ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                              : 'bg-slate-950 border-slate-800 text-slate-500'
                          }`}
                          title="Fixar no topo"
                        >
                          <Star className={`w-4 h-4 ${workout.favorite ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => moveSavedWorkout(workout.id, -1)}
                          disabled={idx === 0}
                          className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 disabled:opacity-30"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => moveSavedWorkout(workout.id, 1)}
                          disabled={idx === filteredWorkouts.length - 1}
                          className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 disabled:opacity-30"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Chips de Preview dos Exercícios */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                      {workout.steps.map((st, i) => (
                        <span
                          key={st.id || i}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap border ${
                            st.type === 'rest'
                              ? 'bg-sky-950/60 border-sky-800/50 text-sky-300'
                              : 'bg-slate-950 border-slate-800 text-slate-300'
                          }`}
                        >
                          {formatHumanDuration(st.durationSeconds)} {st.name}
                        </span>
                      ))}
                    </div>

                    {/* Barra de Ações do Card (Treinar, Editar, Duplicar, Copiar, Excluir) */}
                    {isConfirmingDelete ? (
                      <div className="bg-red-950/60 border border-red-500/40 rounded-2xl p-3 flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-red-200">
                          Excluir &ldquo;{workout.title}&rdquo;?
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setConfirmDeleteWorkoutId(null)}
                            className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-200"
                          >
                            Cancelar
                          </button>
                          <button
                            onClick={() => deleteSavedWorkout(workout.id)}
                            className="px-3 py-1.5 rounded-xl bg-red-500 text-xs font-extrabold text-white"
                          >
                            Sim, Excluir
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <button
                          onClick={() => loadWorkoutIntoBuilder(workout, true)}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 active:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-md"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          Treinar
                        </button>

                        <button
                          onClick={() => loadWorkoutIntoBuilder(workout, false)}
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                          Editar
                        </button>

                        <button
                          onClick={() => duplicateSavedWorkout(workout)}
                          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
                          title="Duplicar treino"
                        >
                          <Copy className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => copyWorkoutAsReadableText(workout)}
                          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
                          title="Compartilhar em texto"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => setConfirmDeleteWorkoutId(workout.id)}
                          className="p-2.5 rounded-xl bg-red-950/50 hover:bg-red-900/60 text-red-300 border border-red-800/40"
                          title="Excluir treino"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </main>

        {/* Modal de Backup / Exportar & Importar JSON */}
        {showBackupModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-5 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-white text-base flex items-center gap-2">
                  <Download className="w-4 h-4 text-cyan-400" />
                  Backup dos Seus Treinos
                </h3>
                <button
                  onClick={() => setShowBackupModal(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-400">
                Como seus treinos ficam salvos no navegador do celular, você pode copiar o código de backup para guardar ou transferir para outro aparelho.
              </p>

              <button
                onClick={handleExportAllJson}
                className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copiar Todos os Meus Treinos (JSON)
              </button>

              <div className="border-t border-slate-800 pt-3 space-y-2">
                <label className="text-xs font-bold text-slate-300 block">
                  Restaurar Backup (Cole o código JSON abaixo):
                </label>
                <textarea
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                  rows={3}
                  placeholder='{"savedWorkouts": [...]}'
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none"
                />
                <button
                  onClick={handleImportJson}
                  disabled={!importJsonText.trim()}
                  className="w-full py-2.5 rounded-xl bg-emerald-500 disabled:opacity-40 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  Restaurar Treinos
                </button>
              </div>
            </div>
          </div>
        )}

        <BottomNavigation />
      </div>
    );
  }

  // ==========================================================================
  // ABA 4: HISTÓRICO DE TREINOS CONCLUÍDOS & ESTATÍSTICAS
  // ==========================================================================
  if (activeTab === 'history') {
    const totalMinutesTrained = Math.round(
      workoutHistory.reduce((acc, h) => acc + (h.totalSeconds || 0), 0) / 60
    );

    return (
      <div className="min-h-[100dvh] bg-slate-950 text-slate-100 pb-24">
        <ToastOverlay />

        <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3.5">
          <div className="max-w-lg mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-lg font-black text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Meu Histórico e Progresso
              </h1>
              <p className="text-xs text-slate-400">Registro automático dos treinos finalizados</p>
            </div>
            {workoutHistory.length > 0 && (
              <button
                onClick={() => {
                  setWorkoutHistory([]);
                  showToast('Histórico limpo.', 'info');
                }}
                className="text-xs text-red-400 hover:underline font-bold"
              >
                Limpar
              </button>
            )}
          </div>
        </header>

        <main className="max-w-lg mx-auto px-4 pt-4 space-y-4">
          {/* Resumo em Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <span className="text-xs text-slate-400 font-semibold block">Treinos Concluídos</span>
              <span className="text-3xl font-black text-emerald-400 mt-1 block">
                {workoutHistory.length}
              </span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <span className="text-xs text-slate-400 font-semibold block">Tempo em Ação</span>
              <span className="text-3xl font-black text-cyan-400 mt-1 block">
                {totalMinutesTrained} <span className="text-sm font-bold">min</span>
              </span>
            </div>
          </div>

          {workoutHistory.length === 0 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
              <Calendar className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-sm font-bold text-slate-300">Nenhum treino finalizado ainda</p>
              <p className="text-xs text-slate-500">
                Complete um treino até o fim para registrar sua evolução aqui!
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {workoutHistory.map((item) => {
                const dateObj = new Date(item.completedAt);
                const formattedDate = dateObj.toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit'
                });
                return (
                  <div
                    key={item.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="font-extrabold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.rounds}x série(s) • {formatHumanDuration(item.totalSeconds)}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      {formattedDate}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </main>

        <BottomNavigation />
      </div>
    );
  }

  // ==========================================================================
  // ABA 2: CRIAR / EDITAR TREINO (BUILDER VIEW MOBILE-FIRST COM CRUD COMPLETO)
  // ==========================================================================
  return (
    <div className="min-h-[100dvh] bg-slate-950 text-slate-100 pb-32">
      <ToastOverlay />

      {/* Cabeçalho Compacto Mobile */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-md">
              <Dumbbell className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h1 className="text-base font-black tracking-tight text-white flex items-center gap-1.5">
                RitmoFit <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">IA</span>
              </h1>
              <p className="text-[11px] text-slate-400">Monte por voz ou ajuste cada tempo</p>
            </div>
          </div>

          {/* Botão Novo Treino em Branco */}
          <button
            onClick={() => setShowClearStepsConfirm(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300"
          >
            <FilePlus className="w-3.5 h-3.5 text-amber-400" />
            Novo em Branco
          </button>
        </div>
      </header>

      {/* Confirmação para Limpar / Criar em Branco */}
      {showClearStepsConfirm && (
        <div className="max-w-lg mx-auto px-4 pt-3">
          <div className="bg-amber-950/70 border border-amber-500/50 rounded-2xl p-3.5 flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-amber-200">
              Começar um treino novo do zero?
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowClearStepsConfirm(false)}
                className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleStartBlankWorkout}
                className="px-3 py-1.5 rounded-xl bg-amber-400 text-xs font-extrabold text-slate-950"
              >
                Sim, Zerar
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-lg mx-auto px-4 pt-4 space-y-5">
        {/* SEÇÃO 1: COMANDO DE VOZ + IA */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-slate-800 rounded-3xl p-4 space-y-3 shadow-lg">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 block">
                🎙️ Dite ou Escreva sua Combinação
              </span>
              <h2 className="text-sm font-bold text-white">
                Fale os tempos e exercícios na ordem desejada
              </h2>
            </div>

            <button
              onClick={toggleVoiceRecording}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl font-extrabold text-xs transition shadow-md ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-4 h-4" />
                  Ouvindo...
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4" />
                  Falar Áudio
                </>
              )}
            </button>
          </div>

          <textarea
            value={voicePrompt}
            onChange={(e) => setVoicePrompt(e.target.value)}
            rows={2}
            placeholder="Ex: 1 min saltitando devagar, 1 min correndo sem sair do lugar, 1 min de polichinelo, 1 min de descanso..."
            className="w-full bg-slate-950/90 border border-slate-800 focus:border-emerald-500 rounded-2xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none resize-none"
          />

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleBuildFromDescription(true)}
              className="py-2.5 px-3 rounded-xl bg-slate-800 active:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700"
            >
              ⚡ Montar Rápido
            </button>
            <button
              onClick={() => handleBuildFromDescription(false)}
              disabled={isGeneratingAI}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold text-xs shadow-md disabled:opacity-50"
            >
              {isGeneratingAI ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Gerando IA...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Criar com IA
                </>
              )}
            </button>
          </div>
        </section>

        {/* SEÇÃO 2: NOME DO TREINO, ROUNDS, TEMPO DE PREPARO E SALVAR */}
        <section className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <input
              type="text"
              value={workoutTitle}
              onChange={(e) => setWorkoutTitle(e.target.value)}
              placeholder="Nome do treino (ex: Treino A - Cardio)"
              className="w-full bg-transparent text-base font-extrabold text-white focus:outline-none border-b border-slate-800 focus:border-emerald-500 pb-1"
            />
          </div>

          {/* Seletor Rápido de Séries (Rounds) e Preparação */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-2.5 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                <Repeat className="w-3.5 h-3.5 text-cyan-400" />
                Séries:
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setRounds((r) => Math.max(1, r - 1))}
                  className="w-7 h-7 rounded-lg bg-slate-800 font-bold text-sm"
                >
                  -
                </button>
                <span className="font-black text-white text-sm w-6 text-center">{rounds}x</span>
                <button
                  onClick={() => setRounds((r) => Math.min(20, r + 1))}
                  className="w-7 h-7 rounded-lg bg-slate-800 font-bold text-sm"
                >
                  +
                </button>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-2.5 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Preparo:
              </span>
              <select
                value={defaultPrepSeconds}
                onChange={(e) => setDefaultPrepSeconds(Number(e.target.value))}
                className="bg-slate-800 text-white text-xs font-extrabold rounded-lg px-2 py-1.5 focus:outline-none"
              >
                <option value={0}>0s (Direto)</option>
                <option value={3}>3 seg</option>
                <option value={5}>5 seg</option>
                <option value={10}>10 seg</option>
              </select>
            </div>
          </div>

          {/* Botões de Salvar (Atualizar Existente ou Salvar Como Novo) */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => saveWorkout(false)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-extrabold text-xs transition"
            >
              <Save className="w-4 h-4" />
              {editingWorkoutId && savedWorkouts.some((w) => w.id === editingWorkoutId)
                ? 'Salvar Alterações'
                : 'Salvar em Meus Treinos'}
            </button>

            {editingWorkoutId && savedWorkouts.some((w) => w.id === editingWorkoutId) && (
              <button
                onClick={() => saveWorkout(true)}
                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" />
                Salvar Cópia
              </button>
            )}
          </div>
        </section>

        {/* SEÇÃO 3: LISTA DE EXERCÍCIOS (CRUD INDIVIDUAL COMPLETO) */}
        <section className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Sequência de Exercícios ({steps.length})
            </span>
            <span className="text-xs font-bold text-emerald-400">
              Total: {formatHumanDuration(totalWorkoutSeconds)}
            </span>
          </div>

          {steps.map((step, index) => {
            const isExpanded = expandedStepId === step.id;
            const mins = Math.floor(step.durationSeconds / 60);
            const secs = step.durationSeconds % 60;

            return (
              <div
                key={step.id}
                className="bg-slate-900/95 border border-slate-800 rounded-3xl p-3.5 space-y-3 shadow-md"
              >
                {/* Linha Principal do Exercício */}
                <div className="flex items-center gap-3">
                  {/* Miniatura Animada */}
                  <div
                    onClick={() => setExpandedStepId(isExpanded ? null : step.id)}
                    className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 relative cursor-pointer"
                  >
                    <ExerciseIllustration
                      visualKey={step.visualKey}
                      customImageUrl={step.customImageUrl}
                      isPaused={false}
                      type={step.type}
                    />
                    <span className="absolute top-1 left-1 w-5 h-5 rounded-full bg-slate-950/90 text-[10px] font-black flex items-center justify-center text-white border border-slate-700">
                      {index + 1}
                    </span>
                  </div>

                  {/* Nome Editável + Tempo */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <input
                      type="text"
                      value={step.name}
                      onChange={(e) => updateStep(step.id, 'name', e.target.value)}
                      className="w-full bg-transparent text-base font-extrabold text-white focus:outline-none border-b border-transparent focus:border-emerald-500 truncate"
                      placeholder="Nome do exercício..."
                    />

                    {/* Botões Rápidos de Tempo */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-sm font-black text-emerald-400 tabular-nums mr-1">
                        {formatTime(step.durationSeconds)}
                      </span>
                      <button
                        onClick={() => adjustStepDuration(step.id, -15)}
                        className="px-2 py-1 rounded-lg bg-slate-800 active:bg-slate-700 text-[11px] font-bold text-slate-300"
                      >
                        -15s
                      </button>
                      <button
                        onClick={() => adjustStepDuration(step.id, +15)}
                        className="px-2 py-1 rounded-lg bg-slate-800 active:bg-slate-700 text-[11px] font-bold text-slate-300"
                      >
                        +15s
                      </button>
                      <button
                        onClick={() => setExpandedStepId(isExpanded ? null : step.id)}
                        className={`px-2 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 border ${
                          isExpanded
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        <SlidersHorizontal className="w-3 h-3" />
                        Detalhes
                      </button>
                    </div>
                  </div>

                  {/* Ações Rápidas: Subir, Descer, Duplicar, Excluir */}
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <div className="flex gap-1">
                      <button
                        onClick={() => moveStep(index, -1)}
                        disabled={index === 0}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 disabled:opacity-25"
                        title="Subir"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => moveStep(index, 1)}
                        disabled={index === steps.length - 1}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 disabled:opacity-25"
                        title="Descer"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => duplicateStep(index)}
                        className="p-1.5 rounded-lg bg-slate-800 text-cyan-300"
                        title="Duplicar exercício"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => removeStep(step.id)}
                        className="p-1.5 rounded-lg bg-red-950/60 text-red-300 border border-red-800/40"
                        title="Excluir exercício"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Gaveta Expansível de Edição Completa do Exercício */}
                {isExpanded && (
                  <div className="pt-3 border-t border-slate-800/80 space-y-3 text-xs">
                    {/* Digitar Minutos e Segundos Exatos + Tipo */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-950 border border-slate-800 rounded-xl p-2">
                        <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                          Tempo Exato (Min : Seg)
                        </label>
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            min={0}
                            max={59}
                            value={mins}
                            onChange={(e) =>
                              setExactStepMinutesAndSeconds(step.id, e.target.value, secs)
                            }
                            className="w-14 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-center font-bold text-white"
                          />
                          <span className="font-bold text-slate-400">min</span>
                          <input
                            type="number"
                            min={0}
                            max={59}
                            value={secs}
                            onChange={(e) =>
                              setExactStepMinutesAndSeconds(step.id, mins, e.target.value)
                            }
                            className="w-14 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-center font-bold text-white"
                          />
                          <span className="font-bold text-slate-400">s</span>
                        </div>
                      </div>

                      <div className="bg-slate-950 border border-slate-800 rounded-xl p-2">
                        <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                          Tipo de Etapa
                        </label>
                        <select
                          value={step.type}
                          onChange={(e) => updateStep(step.id, 'type', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 font-bold text-white"
                        >
                          <option value="warmup">Aquecimento</option>
                          <option value="work">Exercício Principal</option>
                          <option value="rest">Descanso / Pausa</option>
                        </select>
                      </div>
                    </div>

                    {/* Seletor de Animação ou Gerar Imagem IA */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                          Animação na Tela
                        </label>
                        <select
                          value={step.visualKey}
                          onChange={(e) => {
                            updateStep(step.id, 'visualKey', e.target.value);
                            updateStep(step.id, 'customImageUrl', '');
                          }}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-white font-semibold"
                        >
                          {VISUAL_CATALOG.map((vis) => (
                            <option key={vis.key} value={vis.key}>
                              {vis.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-end">
                        <button
                          onClick={() => handleGenerateAIImageForStep(step.id, step.name)}
                          disabled={generatingImageId === step.id}
                          className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold flex items-center justify-center gap-1.5 border border-slate-700"
                        >
                          {generatingImageId === step.id ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              Gerando Arte IA...
                            </>
                          ) : (
                            <>
                              <Wand2 className="w-3.5 h-3.5" />
                              Gerar Ilustração IA Exclusiva
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Dica de postura exibida durante o treino */}
                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                        Instrução / Texto auxiliar na tela
                      </label>
                      <input
                        type="text"
                        value={step.tips}
                        onChange={(e) => updateStep(step.id, 'tips', e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                        placeholder="Dica de postura ou respiração..."
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Botões para Adicionar Exercício ou Descanso */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <button
              onClick={() => addNewStep('work')}
              className="flex items-center justify-center gap-1.5 py-3.5 rounded-2xl bg-slate-900 active:bg-slate-800 text-emerald-400 font-extrabold text-xs border border-emerald-500/30"
            >
              <Plus className="w-4 h-4" />
              + Exercício (1 min)
            </button>
            <button
              onClick={() => addNewStep('rest')}
              className="flex items-center justify-center gap-1.5 py-3.5 rounded-2xl bg-slate-900 active:bg-slate-800 text-sky-400 font-extrabold text-xs border border-sky-500/30"
            >
              <Plus className="w-4 h-4" />
              + Descanso (30 seg)
            </button>
          </div>
        </section>

        {/* Botão Flutuante Grande para Começar o Treino Agora */}
        <div className="pt-2">
          <button
            onClick={startWorkoutPlayer}
            className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 active:from-emerald-400 active:to-cyan-400 text-slate-950 font-black text-base py-4 rounded-2xl shadow-xl shadow-emerald-500/20"
          >
            <Play className="w-5 h-5 fill-current" />
            COMEÇAR TREINO AGORA ({formatHumanDuration(totalWorkoutSeconds)})
          </button>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}