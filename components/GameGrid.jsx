import React from "react";
import Link from "next/link";
import { games } from "@/data/games";

export default function GameGrid() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-title">
            <span className="tdot"></span>Game Populer
          </div>
        </div>
        <div className="game-grid" id="gameGrid">
          {games.map((g, idx) => (
            <Link key={idx} className="game-tile" href="/topup">
              <div className="game-art" style={{ background: g.grad }}>
                {g.emoji}
              </div>
              <div className="game-name">{g.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
