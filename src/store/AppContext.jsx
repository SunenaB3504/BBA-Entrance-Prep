import React, { createContext, useContext, useEffect } from 'react';
import { useProgress } from '../hooks/useProgress';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const progressHook = useProgress();
    const { progress } = progressHook;

    // Persistence: Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('commerce_prep_pro_progress');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // We'd ideally have a setProgress method in useProgress to hydrate this
                // For now, let's assume useProgress manages its own persistence or add it here
            } catch (e) {
                console.error("Failed to parse saved progress", e);
            }
        }
    }, []);

    // Persistence: Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('commerce_prep_pro_progress', JSON.stringify(progress));
    }, [progress]);

    const loadChapterData = async (subjectId, chapterId) => {
        try {
            const subjectFolders = {
                'accountancy': 'accountancy',
                'business-studies': 'business-studies',
                'economics': 'economics'
            };

            const folder = subjectFolders[subjectId];
            if (!folder) throw new Error(`Unknown subject: ${subjectId}`);

            // Use import.meta.glob for better Vite compatibility
            const modules = import.meta.glob('../data/**/*.data.js');
            const path = `../data/${folder}/${chapterId}.data.js`;

            if (modules[path]) {
                const module = await modules[path]();
                const exportName = chapterId.replace(/-([a-z])/g, g => g[1].toUpperCase()) + "Data";
                return module[exportName];
            }

            throw new Error(`Module not found: ${path}`);
        } catch (e) {
            console.error("Failed to load chapter data", e);
            return null;
        }
    };

    const value = {
        ...progressHook,
        loadChapterData
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
