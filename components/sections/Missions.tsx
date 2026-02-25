'use client';

import { useState } from 'react';
import { missions, Horizon } from '@/src/data/missions';
import { EraIntro } from '@/components/missions/EraIntro';
import { MissionGrid } from '@/components/missions/MissionGrid';
import { MissionDetail } from '@/components/missions/MissionDetail';
import { HorizonSelector } from '@/components/missions/HorizonSelector';
import { ActionCards } from '@/components/missions/ActionCards';

export function Missions() {
  const [activeMissionId, setActiveMissionId] = useState(1);
  const [activeHorizon, setActiveHorizon] = useState<Horizon>('30');

  const activeMission = missions.find((m) => m.id === activeMissionId)!;

  return (
    <section id="missions">
      <EraIntro />
      <div className="mission-cta">
        <span className="cta-icon">↓</span>
        <p className="cta-text">
          <strong>Explorez chaque mission</strong> — Cliquez sur l&apos;une des 9 missions
          pour découvrir ma feuille de route et mes plans d&apos;action sur 4 horizons temporels.
        </p>
      </div>
      <MissionGrid
        activeMissionId={activeMissionId}
        onSelect={setActiveMissionId}
      />
      <MissionDetail mission={activeMission} />
      <HorizonSelector
        activeHorizon={activeHorizon}
        onSelect={setActiveHorizon}
      />
      <ActionCards mission={activeMission} horizon={activeHorizon} />
    </section>
  );
}
