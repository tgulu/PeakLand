# Peakland Cleaning Services Web App

## Overview

This project is a small business website for Peakland Cleaning Services. It showcases a modern, responsive marketing site for a cleaning company, with the goal of generating leads and explaining services to potential customers.

## What the business does

Peakland Cleaning Services offers:

- Domestic cleaning (regular/one-off home cleans)
- Commercial cleaning (offices, shops, business premises)
- Window cleaning (interior and exterior)
- After builders cleaning (post-renovation debris and dust removal)
- Holiday let cleaning (turnover cleans for short-term rentals)
- Move-in/move-out cleaning (end-of-tenancy deep cleaning)

## Features included

- Multi-page SPA routing: Home, Services, About, Contact
- Responsive design for desktop and mobile
- Sticky navigation bar with active link highlighting
- Footer quick links including deep anchors to Services sections
- Animated/highlight visuals in Service cards
- Contact area with direct tel/mail links

## Tech stack

- React 19
- React Router DOM v7
- Vite for development and build tooling
- Vanilla CSS Modules for scoped component styling
- Lucide icons for UI icons

## Email API integration with EmailJS

The Contact page has been implemented with EmailJS to allow users to send emails directly to the website owner's inbox without needing a backend server.

EmailJS is a client-side service that sends emails using their API, bypassing the need for server-side code. It uses templates and service configurations set up in their dashboard.

### Benefits

- No backend required
- Secure (keys are public but service is controlled)
- Easy to set up
- Handles spam and rate limiting
