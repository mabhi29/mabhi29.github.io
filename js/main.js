/**
 * Comprehensive Dynamic Datastore containing detailed engineering definitions.
 * This pattern optimizes HTML footprint and handles multi-image parsing.
 */
const projectDataset = {
    "rtos-monitor": {
        title: "Real-Time Environment Monitoring System",
        category: "Embedded & RTOS",
        techStack: ["ESP32", "FreeRTOS", "Embedded C", "Wi-Fi", "Web Server", "OLED System"],
        metrics: [
            { label: "OS Architecture", val: "FreeRTOS" },
            { label: "Sensor Array", val: "DHT11 / MQ135" },
            { label: "Core Execution", val: "Multitasking" }
        ],
        descriptionHTML: `
            <h4><i class="fa-solid fa-circle-info"></i> Project Overview</h4>
            <p>Developed and deployed a robust, real-time industrial environmental monitoring platform powered by a dual-core ESP32 micro-controller operating under FreeRTOS execution schedules.</p>
            
            <h4><i class="fa-solid fa-microchip"></i> Architectural Implementations</h4>
            <ul class="modal-bullet-list">
                <li>Integrated hardware profiles for DHT11 and MQ135 instrumentation arrays, establishing high-accuracy temperature, humidity, and volatile gas calculation tracks.</li>
                <li>Implemented deterministic task scheduling using FreeRTOS primitives, cleanly distributing core computing time across independent threads for data collection, diagnostic OLED rendering loops, and wireless networking layers.</li>
                <li>Isolated high-priority measurement interrupts from lower-priority UI and network IO pipelines, preventing system lag or task starvation during web operations.</li>
            </ul>

            <h4><i class="fa-solid fa-gauge-high"></i> Validation and Debugging</h4>
            <p>Executed deep cross-functional timing evaluation to track hardware-software handshakes, minimizing resource lock contention issues and optimizing memory heap spaces across intense functional performance diagnostics.</p>
        `,
        gallery: [
            "images/smart-environ.jpeg"
        ],
        link: null
    },
    "tsal-system": {
        title: "Tractive System Active Light (TSAL)",
        category: "EV Safety Hardware",
        techStack: ["Analog Circuit Design", "PCB Development", "Op-Amp Arrays", "NE555 Timers", "EV Safety Standards"],
        metrics: [
            { label: "Response Acceleration", val: "~15% Speedup" },
            { label: "Footprint Optimization", val: "~25% Shrunk" },
            { label: "Voltage Threshold", val: "60 VDC" }
        ],
        descriptionHTML: `
            <h4><i class="fa-solid fa-bolt"></i> EV Safety Engineering</h4>
            <p>Designed and analyzed a physical Tractive System Active Light (TSAL) layout built to deliver absolute vehicle status indications mapped directly to rigorous Electric Vehicle safety compliance benchmarks.</p>
            
            <h4><i class="fa-solid fa-diagram-project"></i> Deterministic System States</h4>
            <ul class="modal-bullet-list">
                <li><strong>🔴 Active Hazard State:</strong> Emits a structural blinking visual alert whenever the high-voltage rail registers value transitions exceeding 60V.</li>
                <li><strong>🟢 Safe Discharge State:</strong> Emits a solid green status visual indicator whenever systemic energy declines below the 60V threshold.</li>
                <li><strong>⚫ Deep Safe State:</strong> Structural hardware drop to null emissions (no light active) immediately during isolated wire fault anomalies.</li>
            </ul>

            <h4><i class="fa-solid fa-microchip"></i> Hardware Evolution</h4>
            <p>Transitioned legacy iterations into an operational single-wire fault architecture merging op-amp comparators with custom NE555 timing loops. This reduced board space allocation requirements while accelerating reaction latency profiles.</p>
        `,
        gallery: [
            "images/projects/tsal/tsal1.jpg",
            "images/projects/tsal/tsal2.jpg",
            "images/projects/tsal/tsal3.jpg",
            "images/projects/tsal/tsal4.jpg",
            "images/projects/tsal/tsal5.jpg"
        ],
        link: "https://www.linkedin.com/posts/amule29_embeddedsystems-evtechnology-pcbdesign-activity-7456168092021358592-4ZgP"
    },
    "bspd-device": {
        title: "Brake System Plausibility Device (BSPD)",
        category: "Formula Bharat Compliance",
        techStack: ["Analog Circuit Design", "PCB Design", "Altium Designer", "LTspice Hardware Verification"],
        metrics: [
            { label: "PCB Surface Scaling", val: "35% Shrunk" },
            { label: "Signal Velocity", val: "18% Faster" },
            { label: "Power Cut Threshold", val: "> 5 kW" }
        ],
        descriptionHTML: `
            <h4><i class="fa-solid fa-trophy"></i> Formula Bharat Structural Safety</h4>
            <p>Engineered a critical safety shutdown node—a robust two-layer Brake System Plausibility Device (BSPD) tailored to clear all Formula Bharat rulebook inspections. The system monitors driver inputs to verify absolute powertrain control.</p>

            <h4><i class="fa-solid fa-triangle-exclamation"></i> Critical Challenges & Custom Solutions</h4>
            <ul class="modal-bullet-list">
                <li><strong>Constraint Layout Challenges:</strong> Faced complex space and track density constraints across standard multi-layer alignment vectors. Optimized paths via layout simulations to retain clear signal paths.</li>
                <li><strong>Trace Routing Discrepancies:</strong> Addressed potential noise vulnerabilities along critical analog nodes. Applied layout routing rules to ensure trace stability and performance continuity under load tests.</li>
                <li><strong>Logical Overwrite Execution:</strong> Engineered protection logic that automatically opens the vehicle's master shutdown circuit when hard deceleration triggers concurrent high power demand (>30 bar pressure matched with >5 kW energy levels).</li>
            </ul>

            <h4><i class="fa-solid fa-wave-square"></i> Hardware Topology Shift</h4>
            <p>Replaced old logic-gate topologies with discrete operational amplifiers and low R_ds(on) MOSFET control links, improving component count parameters, response speeds, and absolute fail-safe fallback coverage.</p>
        `,
        gallery: [
            "images/projects/bspd/bspd1.jpg",
            "images/projects/bspd/bspd2.jpg",
            "images/projects/bspd/bspd3.jpg"
        ],
        link: "https://www.linkedin.com/posts/amule29_pcblayout-pcbdesign-altiumdesigner-activity-7239327830646419456-ShMq"
    },
    "bms-system": {
        title: "8-Layer EV Battery Management System",
        category: "Power Electronics",
        techStack: ["PCB Design", "Altium Designer", "ISO-SPI Communication", "EV Battery Telemetry"],
        metrics: [
            { label: "Substrate Density", val: "8 Layers" },
            { label: "Architecture", val: "Master/Slave" },
            { label: "Inter-IC Comms", val: "ISO-SPI" }
        ],
        descriptionHTML: `
            <h4><i class="fa-solid fa-car-battery"></i> Substrate & Communication Topology</h4>
            <p>Designed and validated an 8-layer high-density BMS slave controller layout, structuring two identical modules per energy pack to provide reliable telemetry transmission across harsh automotive electromagnetic environments.</p>
            
            <h4><i class="fa-solid fa-shield-halved"></i> Safety & Management Layers</h4>
            <ul class="modal-bullet-list">
                <li>Implemented sub-millivolt accuracy differential voltage tracking networks alongside localized thermal monitoring zones.</li>
                <li>Integrated hardware-driven passive cell balancing systems to equalize pack state-of-charge distributions, extending the battery's operational lifetime.</li>
                <li>Established high-voltage isolated data links using noise-immune ISO-SPI communication channels, protecting micro-controllers from high-voltage transients.</li>
            </ul>

            <h4><i class="fa-solid fa-handshake"></i> Multi-Disciplinary Synthesis</h4>
            <p>Collaborated with electrical, software, and mechanical development tracks to debug embedded firmware tracking, evaluate signal integrity anomalies, and optimize battery pack space constraints.</p>
        `,
        gallery: [
            "images/smart-cam.jpeg"
        ],
        link: null
    },
    "ecu-system": {
        title: "STM32 Powertrain Electronic Control Unit",
        category: "Vehicle Control Systems",
        techStack: ["STM32 MCU", "Embedded C", "HAL Library", "Sensor Abstraction", "SIL Diagnostics"],
        metrics: [
            { label: "Buses Used", val: "CAN / UART / SPI" },
            { label: "Validation Metric", val: "SIL Completed" },
            { label: "Platform Core", val: "STM32 / HAL" }
        ],
        descriptionHTML: `
            <h4><i class="fa-solid fa-gears"></i> Central Intelligence Node</h4>
            <p>Developed high-reliability application firmware target configurations matching an advanced STM32 vehicle Electronic Control Unit (ECU) designed to control core energy delivery loops.</p>
            
            <h4><i class="fa-solid fa-network-wired"></i> Interface Execution Layer</h4>
            <ul class="modal-bullet-list">
                <li>Integrated data streaming pipelines for high-rate IMUs, wheel encoders, brake transducers, and electronic steering sensors.</li>
                <li>Structured robust data frame parsing over automotive network links, including CAN bus architectures, high-speed SPI channels, and auxiliary UART nodes.</li>
                <li>Built automated hardware fault detection mechanisms capable of tracking out-of-bounds metrics and handling diagnostic fail-safe recovery processes.</li>
            </ul>

            <h4><i class="fa-solid fa-computer"></i> Software-in-the-Loop Validation</h4>
            <p>Tested internal state-machine control logic using Software-in-the-Loop simulation pipelines, confirming algorithm convergence before physical integration phases.</p>
        `,
        gallery: [
            "images/profile.jpg"
        ],
        link: null
    }
};

// DOM Elements Core Hook Setup
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContentTarget");
    const closeBtn = document.getElementById("closeModal");
    const projectCards = document.querySelectorAll(".project-card");

    // Modal Interaction Functions
    function openProjectModal(projectId) {
        const data = projectDataset[projectId];
        if (!data) return;

        // Populate the modal markup template
        let metricsMarkup = data.metrics.map(m => `
            <div class="metric-card">
                <span class="metric-val">${m.val}</span>
                <span class="metric-lbl">${m.lbl}</span>
            </div>
        `).join('');

        let techMarkup = data.techStack.map(t => `<span>${t}</span>`).join('');
        
        // Generate gallery sections if images are available
        let galleryMarkup = "";
        if (data.gallery && data.gallery.length > 0) {
            let thumbs = data.gallery.map((img, idx) => `
                <img src="${img}" class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-idx="${idx}" alt="Thumbnail View">
            `).join('');

            galleryMarkup = `
                <div class="modal-gallery">
                    <h4><i class="fa-solid fa-images"></i> Engineering Gallery</h4>
                    <div class="gallery-main-frame">
                        <img src="${data.gallery[0]}" id="mainGalleryViewer" alt="Active Blueprint View">
                    </div>
                    <div class="gallery-strip">
                        ${data.gallery.length > 1 ? thumbs : ''}
                    </div>
                </div>
            `;
        }

        let linkMarkup = data.link ? `
            <div class="modal-action-row">
                <a href="${data.link}" target="_blank" class="btn-modal-link">
                    <i class="fa-brands fa-linkedin"></i> View Project Publication
                </a>
            </div>
        ` : '';

        modalContent.innerHTML = `
            <div class="modal-header">
                <span class="section-tag">${data.category}</span>
                <h2>${data.title}</h2>
                <div class="modal-tech-stack">
                    ${techMarkup}
                </div>
            </div>
            <div class="metrics-row">
                ${metricsMarkup}
            </div>
            <div class="modal-body-content">
                ${data.descriptionHTML}
            </div>
            ${galleryMarkup}
            ${linkMarkup}
        `;

        // Attach gallery click event listeners
        if (data.gallery && data.gallery.length > 1) {
            const mainViewer = document.getElementById("mainGalleryViewer");
            const thumbs = document.querySelectorAll(".gallery-thumb");
            thumbs.forEach(thumb => {
                thumb.addEventListener("click", (e) => {
                    thumbs.forEach(t => t.classList.remove("active"));
                    e.target.classList.add("active");
                    mainViewer.src = data.gallery[e.target.dataset.idx];
                });
            });
        }

        // Show modal and handle document overflow settings
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeProjectModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    // Attach Event Handlers
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-project-id");
            openProjectModal(id);
        });
    });

    closeBtn.addEventListener("click", closeProjectModal);
    
    // Close modal if user clicks the outer layout mask
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeProjectModal();
    });

    // Close modal on escape keypress events
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeProjectModal();
        }
    });
});