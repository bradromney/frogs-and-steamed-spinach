import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights();

// Game analytics tracking
window.gameAnalytics = {
    trackEvent: (name, data = {}) => {
        if (window.va) {
            window.va('event', {
                name,
                data: {
                    ...data,
                    timestamp: Date.now()
                }
            });
        }
    },
    
    trackGameStart: () => {
        window.gameAnalytics.trackEvent('game_started');
    },
    
    trackGameEnd: (winner) => {
        window.gameAnalytics.trackEvent('game_ended', { winner });
    },
    
    trackProjectile: (type) => {
        window.gameAnalytics.trackEvent('projectile_thrown', { type });
    },
    
    trackHit: (type, target) => {
        window.gameAnalytics.trackEvent('projectile_hit', { type, target });
    }
};

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Speed Insights initialized with module system');
    window.gameAnalytics.trackEvent('page_loaded');
}); 