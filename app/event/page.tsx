"use client";

import React, { useEffect } from "react";

export default function EventPlannerPage() {
  
  // マウント時にイベント画面用のレイアウトを適用（右パネルをなくす）
  useEffect(() => {
    const layoutInner = document.querySelector('.layout-inner');
    if (layoutInner) {
      layoutInner.classList.add('event-layout-override');
    }
    return () => {
      if (layoutInner) {
        layoutInner.classList.remove('event-layout-override');
      }
    }
  }, []);

  return (
    <main className="event-main fade-in">
      
      {/* 1. イベントヘッダー (宇宙背景) */}
      <div className="event-hero">
        <div className="event-hero-info">
          <span className="event-tag">遠征プラン</span>
          <h2 className="event-hero-title">NOVA WORLD TOUR in SEOUL</h2>
          <p className="event-hero-date">KSPO DOME, SEOUL, KOREA<br/>2025.06.28 (SAT) 18:00</p>
        </div>
        <div className="event-countdown-box">
          <p className="countdown-label">当日まであと</p>
          <div className="countdown-time">
            28 <span className="countdown-unit">日</span>
            14 <span className="countdown-unit">時間</span>
            32 <span className="countdown-unit" style={{marginRight: 0}}>分</span>
          </div>
          <p style={{fontSize: "11px", color: "var(--text-secondary)", marginTop: "4px"}}>現地時間 06/28 18:00</p>
        </div>
      </div>

      {/* 2. サマリーカード（3列） */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-header">
            <span className="summary-title">チェックリスト進捗</span>
          </div>
          <div className="summary-value-row">
            <span className="summary-value">67%</span>
            <span className="summary-subvalue">20 / 30 完了</span>
          </div>
          <div className="progress-container"><div className="progress-fill" style={{width: "67%"}}></div></div>
          <div style={{marginTop: "16px", textAlign: "center"}}><a className="panel-more" style={{marginTop: 0}}>チェックリストを開く ＞</a></div>
        </div>

        <div className="summary-card">
          <div className="summary-header">
            <span className="summary-title">予算サマリー</span>
          </div>
          <div className="summary-value-row">
            <span className="summary-value">¥148,600</span>
            <span className="summary-subvalue">/ ¥200,000</span>
          </div>
          <div className="progress-container"><div className="progress-fill warning" style={{width: "74%"}}></div></div>
          <div style={{display: "flex", justifyContent: "space-between", fontSize: "11px", marginTop: "4px", color: "var(--text-secondary)"}}>
            <span>残り ¥51,400</span>
          </div>
          <div style={{marginTop: "16px", textAlign: "center"}}><a className="panel-more" style={{marginTop: 0}}>予算を管理する ＞</a></div>
        </div>

        <div className="summary-card">
          <div className="summary-header">
            <span className="summary-title">旅のステータス</span>
            <span className="status-badge pending" style={{fontSize: "12px", padding: "6px 12px"}}>準備中</span>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", marginTop: "16px"}}>
            <div style={{textAlign: "center"}}>
              <span style={{display: "block", fontSize: "18px"}}>✈️</span>
              <span style={{fontSize: "11px", color: "var(--text-secondary)"}}>予約</span>
              <div style={{fontSize: "14px", fontWeight: 700}}>3/5</div>
            </div>
            <div style={{textAlign: "center"}}>
              <span style={{display: "block", fontSize: "18px"}}>☑️</span>
              <span style={{fontSize: "11px", color: "var(--text-secondary)"}}>タスク</span>
              <div style={{fontSize: "14px", fontWeight: 700}}>20/30</div>
            </div>
            <div style={{textAlign: "center"}}>
              <span style={{display: "block", fontSize: "18px"}}>🎒</span>
              <span style={{fontSize: "11px", color: "var(--text-secondary)"}}>持ち物</span>
              <div style={{fontSize: "14px", fontWeight: 700}}>24/36</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. プランナーダッシュボード（3カラム） */}
      <div className="planner-grid">
        
        {/* 左: 行程・タイムライン */}
        <div className="panel-card" style={{padding: "24px"}}>
          <p className="panel-title">行程・タイムライン</p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date-circle active">
                <span className="timeline-day">26</span>
              </div>
              <div className="timeline-content">
                <p className="timeline-title">移動日 (THU)</p>
                <p className="timeline-desc">仁川国際空港着 → 換金・ホテルチェックイン</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date-circle">
                <span className="timeline-day">27</span>
              </div>
              <div className="timeline-content">
                <p className="timeline-title">自由行動 (FRI)</p>
                <p className="timeline-desc">グッズショップ・聖地巡礼・カフェ巡り</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date-circle" style={{borderColor: "var(--accent-pink)"}}>
                <span className="timeline-day">28</span>
              </div>
              <div className="timeline-content">
                <p className="timeline-title">コンサート当日 (SAT)</p>
                <p className="timeline-desc" style={{color: "var(--primary)", fontWeight: 600}}>KSPO DOME 18:00 開演</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date-circle">
                <span className="timeline-day">29</span>
              </div>
              <div className="timeline-content">
                <p className="timeline-title">帰国日 (SUN)</p>
                <p className="timeline-desc">チェックアウト → 帰国便</p>
              </div>
            </div>
          </div>
          <button className="btn-secondary" style={{width: "100%", marginTop: "16px"}}>＋ 行程を追加</button>
        </div>

        {/* 中央: 予約（交通・宿泊） */}
        <div className="panel-card" style={{padding: "24px"}}>
          <p className="panel-title">予約 (交通・宿泊)</p>
          
          <div className="booking-card">
            <div className="booking-header">
              <span className="booking-type">✈️ 航空券</span>
              <span className="status-badge booked">予約済み</span>
            </div>
            <div className="booking-detail">
              <div className="booking-icon-box">A</div>
              <div className="booking-info" style={{flex: 1}}>
                <p>ASIANA AIRLINES OZ122</p>
                <span>NRT 08:55 → ICN 11:25</span>
              </div>
              <button className="btn-secondary" style={{padding: "4px 12px", fontSize: "11px"}}>詳細</button>
            </div>
          </div>
          
          <div className="booking-card">
            <div className="booking-header">
              <span className="booking-type">🏨 ホテル</span>
              <span className="status-badge booked">予約済み</span>
            </div>
            <div className="booking-detail">
              <div className="booking-icon-box" style={{background: "#F3EDFF", color: "var(--primary)"}}>L</div>
              <div className="booking-info" style={{flex: 1}}>
                <p>L7 HONGDAE by LOTTE</p>
                <span>06/26 - 06/29 (3泊)</span>
              </div>
              <button className="btn-secondary" style={{padding: "4px 12px", fontSize: "11px"}}>詳細</button>
            </div>
          </div>

          <div style={{display: "flex", gap: "12px", marginTop: "16px"}}>
            <button className="btn-secondary" style={{flex: 1}}>＋ 交通を追加</button>
            <button className="btn-secondary" style={{flex: 1}}>＋ 宿泊を追加</button>
          </div>
        </div>

        {/* 右: 持ち物チェックリスト */}
        <div className="panel-card" style={{padding: "24px"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px"}}>
            <p className="panel-title" style={{marginBottom: 0}}>持ち物チェックリスト</p>
            <span style={{fontSize: "12px", fontWeight: 700, color: "var(--primary)"}}>67%</span>
          </div>
          <div className="progress-container" style={{marginBottom: "16px"}}><div className="progress-fill" style={{width: "67%"}}></div></div>
          
          <p style={{fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "12px"}}>必須アイテム</p>
          
          <div className="checklist-item">
            <div className="check-box checked">✓</div>
            <span className="check-label checked">パスポート</span>
          </div>
          <div className="checklist-item">
            <div className="check-box checked">✓</div>
            <span className="check-label checked">航空券 (Eチケット)</span>
          </div>
          <div className="checklist-item">
            <div className="check-box checked">✓</div>
            <span className="check-label checked">ホテル予約確認書</span>
          </div>
          <div className="checklist-item">
            <div className="check-box"></div>
            <span className="check-label">コンサートチケット</span>
          </div>
          <div className="checklist-item">
            <div className="check-box"></div>
            <span className="check-label">クレジットカード</span>
          </div>

          <div style={{marginTop: "16px", textAlign: "center"}}><a className="panel-more" style={{marginTop: 0}}>持ち物リストを開く ＞</a></div>
        </div>

      </div>

      {/* 4. 下部エリア (座席プラン・支出トラッカーなど) */}
      <div className="bottom-grid">
        <div className="panel-card">
          <p className="panel-title">座席プラン</p>
          <div style={{display: "flex", gap: "24px"}}>
            <div style={{flex: 1}}>
              <div className="seat-plan-img">
                🏟 座席表マップ プレビュー
              </div>
            </div>
            <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <p style={{fontSize: "13px", fontWeight: 700}}>座席情報</p>
              <p style={{fontSize: "14px", marginBottom: "16px"}}>FLOOR D 2列 12番 15番<br/><span style={{fontSize: "12px", color: "var(--text-secondary)"}}>中央やや右寄り</span></p>
              
              <p style={{fontSize: "13px", fontWeight: 700}}>視界の見え方</p>
              <p style={{fontSize: "16px", color: "var(--warning)", marginBottom: "16px"}}>★★★★☆ 4.5</p>
              
              <p style={{fontSize: "12px", color: "var(--text-secondary)", background: "var(--bg-lavender)", padding: "12px", borderRadius: "8px"}}>
                メモ: メンバーの全体が見やすそう！トロッコが来る通路側かも？
              </p>
            </div>
          </div>
        </div>

        <div className="panel-card">
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px"}}>
            <p className="panel-title" style={{marginBottom: 0}}>支出トラッカー</p>
            <div style={{textAlign: "right"}}>
              <span style={{fontSize: "20px", fontWeight: 700}}>¥148,600</span>
              <span style={{fontSize: "12px", color: "var(--text-secondary)"}}> / ¥200,000</span>
            </div>
          </div>
          
          <div className="expense-bar">
            <div className="expense-label-row">
              <span>交通費</span><span>¥62,000 (41%)</span>
            </div>
            <div className="progress-container"><div className="progress-fill" style={{width: "41%", background: "#4A90E2"}}></div></div>
          </div>
          
          <div className="expense-bar">
            <div className="expense-label-row">
              <span>宿泊費</span><span>¥48,000 (32%)</span>
            </div>
            <div className="progress-container"><div className="progress-fill" style={{width: "32%", background: "#50E3C2"}}></div></div>
          </div>
          
          <div className="expense-bar">
            <div className="expense-label-row">
              <span>チケット代</span><span>¥33,000 (22%)</span>
            </div>
            <div className="progress-container"><div className="progress-fill" style={{width: "22%", background: "#F5A623"}}></div></div>
          </div>

          <div style={{marginTop: "24px", textAlign: "center"}}><a className="panel-more" style={{marginTop: 0}}>支出を記録する ＞</a></div>
        </div>
      </div>
      
    </main>
  );
}
