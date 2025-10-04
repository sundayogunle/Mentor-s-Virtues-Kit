import React, { lazy } from 'react';

// Use React.lazy for dynamic imports, which enables code-splitting.
// Each illustration component will now be in its own chunk and loaded only when needed.
const AssertivenessIllustration = lazy(() => import('./illustrations/AssertivenessIllustration'));
const CleanlinessIllustration = lazy(() => import('./illustrations/CleanlinessIllustration'));
const KindnessIllustration = lazy(() => import('./illustrations/KindnessIllustration'));
const CompassionIllustration = lazy(() => import('./illustrations/CompassionIllustration'));
const ConsiderationIllustration = lazy(() => import('./illustrations/ConsiderationIllustration'));
const EnthusiasmIllustration = lazy(() => import('./illustrations/EnthusiasmIllustration'));
const ExcellenceIllustration = lazy(() => import('./illustrations/ExcellenceIllustration'));
const ForgivenessIllustration = lazy(() => import('./illustrations/ForgivenessIllustration'));
const HonestyIllustration = lazy(() => import('./illustrations/HonestyIllustration'));
const HumilityIllustration = lazy(() => import('./illustrations/HumilityIllustration'));
const HonourIllustration = lazy(() => import('./illustrations/HonourIllustration'));
const JoyfulnessIllustration = lazy(() => import('./illustrations/JoyfulnessIllustration'));
const JusticeIllustration = lazy(() => import('./illustrations/JusticeIllustration'));
const ModerationIllustration = lazy(() => import('./illustrations/ModerationIllustration'));
const PatienceIllustration = lazy(() => import('./illustrations/PatienceIllustration'));
const OrderlinessIllustration = lazy(() => import('./illustrations/OrderlinessIllustration'));
const CuriosityIllustration = lazy(() => import('./illustrations/CuriosityIllustration'));
const CommunicationIllustration = lazy(() => import('./illustrations/CommunicationIllustration'));
const LoyaltyIllustration = lazy(() => import('./illustrations/LoyaltyIllustration'));
const ReliabilityIllustration = lazy(() => import('./illustrations/ReliabilityIllustration'));
const RespectIllustration = lazy(() => import('./illustrations/RespectIllustration'));
const PeacefulnessIllustration = lazy(() => import('./illustrations/PeacefulnessIllustration'));
const PerseveranceIllustration = lazy(() => import('./illustrations/PerseveranceIllustration'));
const SelfDisciplineIllustration = lazy(() => import('./illustrations/SelfDisciplineIllustration'));
const FriendlinessIllustration = lazy(() => import('./illustrations/FriendlinessIllustration'));
const GenerosityIllustration = lazy(() => import('./illustrations/GenerosityIllustration'));
const ToleranceIllustration = lazy(() => import('./illustrations/ToleranceIllustration'));
const CourageIllustration = lazy(() => import('./illustrations/CourageIllustration'));


interface VirtueIllustrationProps {
  name: string;
  alt: string;
}

const VirtueIllustration: React.FC<VirtueIllustrationProps> = ({ name, alt }) => {
  const commonProps = {
    "aria-label": alt,
    className: "w-full h-full object-cover",
  };

  switch (name) {
    case 'VirtueIllustration_Assertiveness':
      return <AssertivenessIllustration {...commonProps} />;
    case 'VirtueIllustration_Cleanliness':
      return <CleanlinessIllustration {...commonProps} />;
    case 'VirtueIllustration_Kindness':
      return <KindnessIllustration {...commonProps} />;
    case 'VirtueIllustration_Compassion':
      return <CompassionIllustration {...commonProps} />;
    case 'VirtueIllustration_Consideration':
      return <ConsiderationIllustration {...commonProps} />;
    case 'VirtueIllustration_Enthusiasm':
      return <EnthusiasmIllustration {...commonProps} />;
    case 'VirtueIllustration_Excellence':
      return <ExcellenceIllustration {...commonProps} />;
    case 'VirtueIllustration_Forgiveness':
      return <ForgivenessIllustration {...commonProps} />;
    case 'VirtueIllustration_Honesty':
      return <HonestyIllustration {...commonProps} />;
    case 'VirtueIllustration_Humility':
        return <HumilityIllustration {...commonProps} />;
    case 'VirtueIllustration_Honour':
        return <HonourIllustration {...commonProps} />;
    case 'VirtueIllustration_Joyfulness':
        return <JoyfulnessIllustration {...commonProps} />;
    case 'VirtueIllustration_Justice':
        return <JusticeIllustration {...commonProps} />;
    case 'VirtueIllustration_Moderation':
        return <ModerationIllustration {...commonProps} />;
    case 'VirtueIllustration_Patience':
        return <PatienceIllustration {...commonProps} />;
    case 'VirtueIllustration_Orderliness':
        return <OrderlinessIllustration {...commonProps} />;
    case 'VirtueIllustration_Curiosity':
        return <CuriosityIllustration {...commonProps} />;
    case 'VirtueIllustration_Communication':
        return <CommunicationIllustration {...commonProps} />;
    case 'VirtueIllustration_Loyalty':
        return <LoyaltyIllustration {...commonProps} />;
    case 'VirtueIllustration_Reliability':
        return <ReliabilityIllustration {...commonProps} />;
    case 'VirtueIllustration_Respect':
        return <RespectIllustration {...commonProps} />;
    case 'VirtueIllustration_Peacefulness':
        return <PeacefulnessIllustration {...commonProps} />;
    case 'VirtueIllustration_Perseverance':
        return <PerseveranceIllustration {...commonProps} />;
    case 'VirtueIllustration_SelfDiscipline':
        return <SelfDisciplineIllustration {...commonProps} />;
    case 'VirtueIllustration_Friendliness':
        return <FriendlinessIllustration {...commonProps} />;
    case 'VirtueIllustration_Generosity':
        return <GenerosityIllustration {...commonProps} />;
    case 'VirtueIllustration_Tolerance':
        return <ToleranceIllustration {...commonProps} />;
    case 'VirtueIllustration_Courage':
        return <CourageIllustration {...commonProps} />;
    default:
      // Return a simple placeholder or null if no illustration matches
      return <div className="w-full h-full bg-slate-200" />;
  }
};

export default VirtueIllustration;