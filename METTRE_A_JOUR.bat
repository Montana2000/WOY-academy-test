@echo off
cd /d "%~dp0"
title Mise a jour WOY Academy - Vercel

echo ========================================================
echo        MISE A JOUR DE WOY ACADEMY VERS GITHUB / VERCEL
echo ========================================================
echo.
echo [1/4] Verification du dossier...
echo Dossier: %~dp0
echo.

echo [2/4] Enregistrement des modifications...
"C:\Program Files\Git\cmd\git.exe" add -A
echo.

echo [3/4] Validation des modifications...
"C:\Program Files\Git\cmd\git.exe" commit -m "Mise a jour versions mobiles Route et Porte"
echo.

echo [4/4] Envoi vers GitHub et Vercel...
"C:\Program Files\Git\cmd\git.exe" push origin main
echo.

if %errorlevel% equ 0 (
    echo ========================================================
    echo   SUCCES ! La mise a jour a ete envoyee a GitHub !
    echo   Vercel compile et deploie automatiquement le site.
    echo.
    echo   Lien du site : https://woy-academy-test.vercel.app
    echo ========================================================
) else (
    echo ========================================================
    echo   ATTENTION : Une erreur est survenue lors de l envoi.
    echo   Verifie ta connexion internet ou tes identifiants GitHub.
    echo ========================================================
)

echo.
pause
