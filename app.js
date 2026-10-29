/**
 * EcoTrack • E-Waste Academic Portfolio Application Logic
 * Student: Harshita Dhande (Roll: 24102A0071) | Division: CMPN-A | Year: TE-CMPN
 * Faculty Evaluator: Prof. Aniket Kundu
 */

const ACTIVITIES = [
  // --- ISA ACTIVITIES ---
  {
    id: "isa-0",
    index: "ISA • Activity 01",
    category: "isa",
    title: "Assignment Zero – Check AAP",
    description: "Baseline self-assessment & initial appraisal verification (AAP) document submitted for academic enrollment and coursework benchmarking.",
    tags: ["Initial Appraisal", "Course Baseline", "Verification", "AAP Protocol"],
    liveUrl: null,
    files: [
      {
        name: "24102A0071_E-Waste_Ass-0 (1).pdf",
        path: "assigments/Assignment Zero_Check AAP/24102A0071_E-Waste_Ass-0 (1).pdf",
        type: "pdf"
      }
    ]
  },
  {
    id: "isa-1",
    index: "ISA • Activity 02",
    category: "isa",
    title: "Assignment 1 – State E-Waste Tracker (Uttarakhand)",
    description: "Geospatial state-level analysis, district-wise inventory logging, and formal recycling metrics for electronic waste across Uttarakhand.",
    tags: ["State Analytics", "Uttarakhand Report", "Collection Log", "Excel Dataset"],
    liveUrl: null,
    files: [
      {
        name: "Uttarakhand_EWaste_Report.docx",
        path: "assigments/Assignment_1_State E Waste Tracker/Uttarakhand_EWaste_Report.docx",
        type: "docx"
      },
      {
        name: "Uttarakhand_Ewaste_Collection_Log (3).xlsx",
        path: "assigments/Assignment_1_State E Waste Tracker/Uttarakhand_Ewaste_Collection_Log (3).xlsx",
        type: "xlsx"
      }
    ]
  },
  {
    id: "isa-ppt",
    index: "ISA • Activity 03",
    category: "isa",
    title: "PPT Presentation – State-wise E-Waste Tracker",
    description: "Academic slide deck presentation analyzing Uttarakhand's collection infrastructure, e-waste processing capacity, and municipal policy recommendations.",
    tags: ["Presentation", "Uttarakhand Analysis", "Slide Deck", "PPTX"],
    liveUrl: null,
    files: [
      {
        name: "24102A0071_Uttarakhand (1).pptx",
        path: "assigments/PPT Upload for State wise E Waste Tracker/24102A0071_Uttarakhand (1).pptx",
        type: "pptx"
      }
    ]
  },
  {
    id: "isa-2",
    index: "ISA • Activity 04",
    category: "isa",
    title: "Assignment 2 – Elemental Blueprint (In-Class Activity)",
    description: "Technical study analyzing printed circuit board (PCB) toxic heavy metals (Lead, Mercury, Cadmium) and recovery blueprints for critical rare earth minerals.",
    tags: ["Elemental Blueprint", "PCB Analysis", "Rare Earth Elements", "In-Class Study"],
    liveUrl: null,
    files: [
      {
        name: "Harshita_24102A0071_EWASTE.pdf",
        path: "assigments/Assisgnment_2_Elemental Blueprint_In Class Activity/Harshita_24102A0071_EWASTE.pdf",
        type: "pdf"
      }
    ]
  },

  // --- ESE ACTIVITIES ---
  {
    id: "ese-1",
    index: "ESE • Activity 01",
    category: "ese",
    title: "Changes in the E-Waste Recovery Process Document",
    description: "Comparative technological documentation detailing transitions from traditional pyro-metallurgical dismantling to modern eco-hydrometallurgical extraction and circular processing.",
    tags: ["Recovery Process", "Hydrometallurgy", "Process Engineering", "Circular Flow"],
    liveUrl: null,
    files: [
      {
        name: "Changes in the E Waste Recover Process Document-2 (1).docx",
        path: "assigments/Changes in the E Waste Recover Process Document/Changes in the E Waste Recover Process Document-2 (1).docx",
        type: "docx"
      }
    ]
  },
  {
    id: "ese-2",
    index: "ESE • Activity 02",
    category: "ese",
    title: "Indian Companies Following E-Waste Rules – 5 Case Studies",
    description: "In-depth corporate Extended Producer Responsibility (EPR) analysis of 5 major Indian tech and industrial giants, complemented with DevOps CI/CD deployed web portal.",
    tags: ["EPR Compliance", "5 Case Studies", "DevOps Dashboard", "Corporate Policy"],
    liveUrl: "https://samruddhinareshsakharkar.github.io/Miniproject_Devops/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=b50c1ce2-6167-487e-9f08-51a50e9fbaf0&submissionId=9947b6dc-8517-83e9-9004-774c64ac524d",
    files: [
      {
        name: "Indian Companies Following E waste Rules_5 case studies.pdf",
        path: "assigments/Indian Companies Following E waste Rules_5 case studies/Indian Companies Following E waste Rules_5 case studies.pdf",
        type: "pdf"
      }
    ]
  },
  {
    id: "ese-3",
    index: "ESE • Activity 03",
    category: "ese",
    title: "New Start-up Ideas & E-Waste Rules Comparison",
    description: "Venture incubation pitch deck for student & community e-waste collection enterprise, accompanied by comparative legal evaluation of India's E-Waste Management Rules (2016 vs 2022).",
    tags: ["Startup Venture", "Pitch Deck", "Rules Comparison", "Business Model"],
    liveUrl: null,
    files: [
      {
        name: "comparison-2 (1).docx",
        path: "assigments/New Start up Ideas_E Waste Rules and Regulations Comparison/comparison-2 (1).docx",
        type: "docx"
      },
      {
        name: "24102A0071_Harshita_Pitch Deck.pptx",
        path: "assigments/New Start up Ideas_E Waste Rules and Regulations Comparison/24102A0071_Harshita_Pitch Deck.pptx",
        type: "pptx"
      }
    ]
  },
  {
    id: "ese-4",
    index: "ESE • Activity 04",
    category: "ese",
    title: "E-Waste Campaign in College – Ideas & Drive",
    description: "Integrated campus awareness initiative featuring real-time telemetry campaign analytics dashboard, interactive student survey quiz portal, campaign poster, and Q&A documentation.",
    tags: ["Campus Campaign", "Live Analytics", "Interactive Quiz", "Poster & QnA"],
    liveUrl: "https://pratiksha9321.github.io/ewaste-dashboard/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=91618746-47e9-4f9c-99ca-697c3e2c90f6&submissionId=cc97ed25-40b7-a7aa-c3d4-60aca53fb838&classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=91618746-47e9-4f9c-99ca-697c3e2c90f6&submissionId=b22e3da6-5de6-4f3e-d9f2-6b7822651c37",
    liveUrlLabel: "Campaign Dashboard",
    additionalLinks: [
      {
        title: "Campus Quiz & Survey Portal",
        url: "https://samruddhinareshsakharkar.github.io/ewaste-quiz-form/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=91618746-47e9-4f9c-99ca-697c3e2c90f6&submissionId=cc97ed25-40b7-a7aa-c3d4-60aca53fb838&classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=91618746-47e9-4f9c-99ca-697c3e2c90f6&submissionId=b22e3da6-5de6-4f3e-d9f2-6b7822651c37"
      }
    ],
    files: [
      {
        name: "tmp_74f3de0f-f4b2-4039-b77b-4d3b2f752858 (1).jpeg",
        displayName: "Campus Campaign Poster (High-Res)",
        path: "assigments/E waste Campaign in College_Ideas submission Folder/tmp_74f3de0f-f4b2-4039-b77b-4d3b2f752858 (1).jpeg",
        type: "jpeg",
        isImage: true
      },
      {
        name: "E-waste QnA Solution (1).docx",
        path: "assigments/E waste Campaign in College_Ideas submission Folder/E-waste QnA Solution (1).docx",
        type: "docx"
      }
    ]
  },
  {
    id: "ese-5",
    index: "ESE • Activity 05",
    category: "ese",
    title: "LEED Certification in India & Green Building Detector",
    description: "Deployment of an intelligent Green Building Detector web app on Vercel combined with verified dataset on the Top 10 Indian structures certified under LEED v5 standards.",
    tags: ["LEED v5", "Green Building Detector", "Vercel Deployed", "Sustainability Metrics"],
    liveUrl: "https://green-building-detector.vercel.app/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=f7c58a0a-f019-4032-9fc8-d08626ab7c25&submissionId=07b7c376-37d5-3746-6a0c-4b091b43c913",
    files: [
      {
        name: "Top_10_Green_Buildings_India_LEEDv5 (1).xlsx",
        path: "assigments/LEED certification in India/Top_10_Green_Buildings_India_LEEDv5 (1).xlsx",
        type: "xlsx"
      }
    ]
  },
  {
    id: "ese-6",
    index: "ESE • Activity 06",
    category: "ese",
    title: "Case Studies Submission & MSE Report",
    description: "Extensive field study and MSE 2 evaluation report exploring unorganized scrap sector challenges, informal dismantling hazards, and circular reverse logistics.",
    tags: ["MSE 2 Report", "Circular Economy", "Field Case Studies", "Reverse Logistics"],
    liveUrl: null,
    files: [
      {
        name: "MSE 2 Report Harshita (1).docx",
        path: "assigments/Case Studies Submission/MSE 2 Report Harshita (1).docx",
        type: "docx"
      },
      {
        name: "E-Waste Management & Circular Economy Case Studies (1).pdf",
        path: "assigments/Case Studies Submission/E-Waste Management & Circular Economy Case Studies (1).pdf",
        type: "pdf"
      }
    ]
  },
  {
    id: "ese-7",
    index: "ESE • Activity 07",
    category: "ese",
    title: "IEEE Paper Submission (In-Class Activity)",
    description: "Technical IEEE-format paper exploring verifiable recovery mechanisms, lifecycle hardware firmware trust, and sustainable computing infrastructure.",
    tags: ["IEEE Paper", "Firmware Recovery", "In-Class Research", "Academic Paper"],
    liveUrl: null,
    files: [
      {
        name: "Verifiable_Recovery_Firmware_Kernel_Trust_Handoff_preview-3 (1).pdf",
        path: "assigments/IEEE Paper Submission_In class activity/Verifiable_Recovery_Firmware_Kernel_Trust_Handoff_preview-3 (1).pdf",
        type: "pdf"
      }
    ]
  }
];

// Helper to URL encode relative file paths safely
function encodePath(path) {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
}

// Global Filter & View State
let currentFilter = "all";
let searchQuery = "";
let currentViewMode = "grid"; // 'grid' | 'table'

// DOM Elements
const activitiesGrid = document.getElementById("activitiesGrid");
const activitiesTableWrapper = document.getElementById("activitiesTableWrapper");
const activitiesTableBody = document.getElementById("activitiesTableBody");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const filterPills = document.querySelectorAll(".filter-pill");
const noResults = document.getElementById("noResults");
const viewGridBtn = document.getElementById("viewGridBtn");
const viewTableBtn = document.getElementById("viewTableBtn");
const themeToggle = document.getElementById("themeToggle");

// Modal Elements
const previewModal = document.getElementById("previewModal");
const previewIframe = document.getElementById("previewIframe");
const modalTitle = document.getElementById("modalTitle");
const modalUrl = document.getElementById("modalUrl");
const modalExternalLink = document.getElementById("modalExternalLink");
const modalLoader = document.getElementById("modalLoader");

const imageModal = document.getElementById("imageModal");
const imageModalSrc = document.getElementById("imageModalSrc");
const imageModalTitle = document.getElementById("imageModalTitle");
const imageModalDownload = document.getElementById("imageModalDownload");

// Evaluation Drawer Elements
const evaluationDrawer = document.getElementById("evaluationDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const evaluationDrawerBtn = document.getElementById("evaluationDrawerBtn");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
const isaChecklist = document.getElementById("isaChecklist");
const eseChecklist = document.getElementById("eseChecklist");
const checklistProgress = document.getElementById("checklistProgress");
const verifiedCountText = document.getElementById("verifiedCountText");
const facultyComments = document.getElementById("facultyComments");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderActivities();
  setupEventListeners();
  initEvaluationDrawer();
  initChecklist();
});

// Setup Event Listeners
function setupEventListeners() {
  // Search
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    clearSearchBtn.style.display = searchQuery ? "block" : "none";
    renderActivities();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderActivities();
  });

  // Filter Pills
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-filter");
      renderActivities();
    });
  });

  // View Switchers
  viewGridBtn.addEventListener("click", () => setViewMode("grid"));
  viewTableBtn.addEventListener("click", () => setViewMode("table"));

  // Drawer
  evaluationDrawerBtn.addEventListener("click", openEvaluationDrawer);
  closeDrawerBtn.addEventListener("click", closeEvaluationDrawer);
  drawerBackdrop.addEventListener("click", closeEvaluationDrawer);

  // Theme
  themeToggle.addEventListener("click", toggleTheme);

  // Keyboard Shortcuts (Esc to close modals)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePreviewModal();
      closeImageModal();
      closeEvaluationDrawer();
    }
  });

  // Iframe Loader Hide Event
  previewIframe.addEventListener("load", () => {
    modalLoader.classList.add("hidden");
  });
}

// Switch View Modes
function setViewMode(mode) {
  currentViewMode = mode;
  if (mode === "grid") {
    viewGridBtn.classList.add("active");
    viewTableBtn.classList.remove("active");
    activitiesGrid.style.display = "grid";
    activitiesTableWrapper.style.display = "none";
  } else {
    viewTableBtn.classList.add("active");
    viewGridBtn.classList.remove("active");
    activitiesGrid.style.display = "none";
    activitiesTableWrapper.style.display = "block";
  }
}

// Filtering Logic
function getFilteredActivities() {
  return ACTIVITIES.filter(activity => {
    // 1. Category Filter
    let matchesCategory = true;
    if (currentFilter === "isa") matchesCategory = activity.category === "isa";
    else if (currentFilter === "ese") matchesCategory = activity.category === "ese";
    else if (currentFilter === "live") matchesCategory = Boolean(activity.liveUrl || (activity.additionalLinks && activity.additionalLinks.length > 0));
    else if (currentFilter === "presentation") {
      matchesCategory = activity.files.some(f => f.type === "pptx") || activity.tags.includes("Presentation") || activity.tags.includes("Pitch Deck");
    }

    // 2. Search Query Match
    let matchesSearch = true;
    if (searchQuery) {
      const titleMatch = activity.title.toLowerCase().includes(searchQuery);
      const descMatch = activity.description.toLowerCase().includes(searchQuery);
      const tagMatch = activity.tags.some(t => t.toLowerCase().includes(searchQuery));
      const fileMatch = activity.files.some(f => f.name.toLowerCase().includes(searchQuery));
      matchesSearch = titleMatch || descMatch || tagMatch || fileMatch;
    }

    return matchesCategory && matchesSearch;
  });
}

// Main Render Function
function renderActivities() {
  const filtered = getFilteredActivities();

  if (filtered.length === 0) {
    activitiesGrid.style.display = "none";
    activitiesTableWrapper.style.display = "none";
    noResults.style.display = "flex";
    return;
  }

  noResults.style.display = "none";
  if (currentViewMode === "grid") {
    activitiesGrid.style.display = "grid";
    activitiesTableWrapper.style.display = "none";
  } else {
    activitiesGrid.style.display = "none";
    activitiesTableWrapper.style.display = "block";
  }

  // Render Grid Cards
  activitiesGrid.innerHTML = filtered.map(activity => createActivityCardHTML(activity)).join("");

  // Render Table View
  activitiesTableBody.innerHTML = filtered.map(activity => createActivityTableRowHTML(activity)).join("");
}

// Generate HTML for Single Activity Card
function createActivityCardHTML(activity) {
  const isIsa = activity.category === "isa";
  const categoryBadgeClass = isIsa ? "isa" : "ese";

  // Build Files HTML
  const filesHTML = activity.files.map(file => {
    const encoded = encodePath(file.path);
    const displayName = file.displayName || file.name;
    const isImage = Boolean(file.isImage);
    const isPdf = file.type === "pdf";

    let viewButton = "";
    if (isImage) {
      viewButton = `
        <button class="btn-file-action view-btn" onclick="openImageModal('${encoded}', '${displayName}')" title="View High-Res Poster">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          <span>View</span>
        </button>
      `;
    } else if (isPdf) {
      viewButton = `
        <button class="btn-file-action view-btn" onclick="openPreviewModal('${encoded}', '${displayName}')" title="Preview PDF Document">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          <span>View</span>
        </button>
      `;
    } else {
      viewButton = `
        <button class="btn-file-action view-btn" onclick="previewOfficeFile('${encoded}', '${file.name}', '${file.type}')" title="Preview ${file.type.toUpperCase()}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          <span>Preview</span>
        </button>
      `;
    }

    return `
      <div class="file-row">
        <div class="file-info" title="${file.name}">
          <span class="file-ext-badge ext-${file.type}">${file.type}</span>
          <span class="file-name-text">${displayName}</span>
        </div>
        <div class="file-actions">
          ${viewButton}
          <a href="${encoded}" download="${file.name}" class="btn-file-action" title="Download File">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>Download</span>
          </a>
        </div>
      </div>
    `;
  }).join("");

  // Build Live Actions (if any)
  let liveActionsHTML = "";
  if (activity.liveUrl) {
    const mainTitle = activity.liveUrlLabel || "Deployed Web App";
    liveActionsHTML += `
      <div class="live-link-group">
        <a href="${activity.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-act-launch">
          <span>Launch ${mainTitle}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
        <button class="btn-act-preview" onclick="openPreviewModal('${activity.liveUrl}', '${activity.title}')">
          <span>Preview</span>
        </button>
      </div>
    `;
  }

  if (activity.additionalLinks && activity.additionalLinks.length > 0) {
    activity.additionalLinks.forEach(link => {
      liveActionsHTML += `
        <div class="live-link-group" style="margin-top: 0.5rem;">
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn-act-launch" style="background: var(--gradient-purple);">
            <span>Launch ${link.title}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <button class="btn-act-preview" onclick="openPreviewModal('${link.url}', '${link.title}')">
            <span>Preview</span>
          </button>
        </div>
      `;
    });
  }

  return `
    <div class="activity-card" id="card-${activity.id}">
      <div class="act-card-header">
        <span class="act-index-badge ${categoryBadgeClass}">${activity.index}</span>
        ${activity.liveUrl ? '<span class="live-pill"><span class="live-dot pulse-pink"></span> Live Deployed</span>' : ''}
      </div>

      <h3 class="act-card-title">${activity.title}</h3>
      <p class="act-card-desc">${activity.description}</p>

      <div class="act-tags">
        ${activity.tags.map(t => `<span class="act-tag">${t}</span>`).join("")}
      </div>

      <div class="act-files-section">
        <div class="act-files-header">
          <span class="act-files-label">Submitted Deliverables</span>
          <span class="files-count-tag">${activity.files.length} file${activity.files.length > 1 ? 's' : ''}</span>
        </div>
        ${filesHTML}
      </div>

      ${liveActionsHTML ? `<div class="act-card-actions">${liveActionsHTML}</div>` : ''}
    </div>
  `;
}

// Generate HTML for Single Table Row
function createActivityTableRowHTML(activity) {
  const isIsa = activity.category === "isa";
  const badgeClass = isIsa ? "purple" : "pink";

  const filesLinks = activity.files.map(f => {
    const encoded = encodePath(f.path);
    return `
      <div class="file-row" style="padding: 0.25rem 0.5rem; margin-bottom: 2px;">
        <span class="file-ext-badge ext-${f.type}">${f.type}</span>
        <span class="file-name-text" style="font-size: 0.76rem;">${f.displayName || f.name}</span>
        <a href="${encoded}" download="${f.name}" class="btn-file-action" style="padding: 0.15rem 0.4rem; font-size: 0.7rem;">Download</a>
      </div>
    `;
  }).join("");

  let liveLinkContent = '<span class="text-muted" style="font-size: 0.8rem;">—</span>';
  if (activity.liveUrl) {
    liveLinkContent = `
      <div style="display: flex; flex-direction: column; gap: 0.3rem;">
        <a href="${activity.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-solid-launch" style="padding: 0.3rem 0.6rem; font-size: 0.74rem;">
          <span>${activity.liveUrlLabel || 'Launch App'}</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    `;
  }

  return `
    <tr>
      <td class="table-code">${activity.id.toUpperCase()}</td>
      <td><span class="module-chip ${badgeClass}">${activity.category.toUpperCase()}</span></td>
      <td>
        <strong>${activity.title}</strong>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">${activity.description.substring(0, 85)}...</p>
      </td>
      <td><div class="table-files-flex">${filesLinks}</div></td>
      <td>${liveLinkContent}</td>
      <td>
        <button class="btn-solid-preview" style="padding: 0.35rem 0.65rem; font-size: 0.74rem;" onclick="jumpToCard('${activity.id}')">
          View Card
        </button>
      </td>
    </tr>
  `;
}

// Navigation & Card Highlighting
function jumpToCard(id) {
  setViewMode("grid");
  const el = document.getElementById(`card-${id}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("highlight");
    setTimeout(() => {
      el.classList.remove("highlight");
    }, 2000);
  }
}

// Filter reset
function resetFilters() {
  searchInput.value = "";
  searchQuery = "";
  clearSearchBtn.style.display = "none";
  currentFilter = "all";
  filterPills.forEach(p => {
    if (p.getAttribute("data-filter") === "all") p.classList.add("active");
    else p.classList.remove("active");
  });
  renderActivities();
}

function applyMetricFilter(filterName) {
  currentFilter = filterName;
  filterPills.forEach(p => {
    if (p.getAttribute("data-filter") === filterName) p.classList.add("active");
    else p.classList.remove("active");
  });
  renderActivities();
  document.getElementById("activitiesSection").scrollIntoView({ behavior: "smooth" });
}

// Modal Controllers
function openPreviewModal(url, title = "Live Preview") {
  modalTitle.textContent = title;
  modalUrl.textContent = url;
  modalExternalLink.href = url;
  modalLoader.classList.remove("hidden");
  previewIframe.src = url;
  previewModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePreviewModal() {
  previewModal.classList.remove("open");
  previewIframe.src = "";
  document.body.style.overflow = "";
}

function openImageModal(src, title = "Campus Campaign Poster") {
  imageModalTitle.textContent = title;
  imageModalSrc.src = src;
  imageModalDownload.href = src;
  imageModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModalSrc.src = "";
  document.body.style.overflow = "";
}

// Drawer Controller
function openEvaluationDrawer() {
  evaluationDrawer.classList.add("open");
  drawerBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeEvaluationDrawer() {
  evaluationDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// Rubric Calculator
function calculateTotalScore() {
  const isa = parseInt(document.getElementById("scoreIsa").value) || 0;
  const live = parseInt(document.getElementById("scoreLive").value) || 0;
  const ieee = parseInt(document.getElementById("scoreIeee").value) || 0;
  const cstudy = parseInt(document.getElementById("scoreCase").value) || 0;
  const pitch = parseInt(document.getElementById("scorePitch").value) || 0;

  const total = isa + live + ieee + cstudy + pitch;
  const pct = Math.round((total / 50) * 100);

  let grade = "Outstanding (O)";
  if (pct < 60) grade = "Fair (C)";
  else if (pct < 75) grade = "Good (B)";
  else if (pct < 85) grade = "Very Good (A)";
  else if (pct < 95) grade = "Excellent (A+)";

  document.getElementById("totalScoreText").textContent = `${total} / 50 (${pct}% - ${grade})`;

  // Save to local storage
  localStorage.setItem("ecotrack_rubric_scores", JSON.stringify({ isa, live, ieee, cstudy, pitch }));
}

function initEvaluationDrawer() {
  const savedScores = localStorage.getItem("ecotrack_rubric_scores");
  if (savedScores) {
    const saved = JSON.parse(savedScores);
    if (document.getElementById("scoreIsa")) document.getElementById("scoreIsa").value = saved.isa;
    if (document.getElementById("scoreLive")) document.getElementById("scoreLive").value = saved.live;
    if (document.getElementById("scoreIeee")) document.getElementById("scoreIeee").value = saved.ieee;
    if (document.getElementById("scoreCase")) document.getElementById("scoreCase").value = saved.cstudy;
    if (document.getElementById("scorePitch")) document.getElementById("scorePitch").value = saved.pitch;
    calculateTotalScore();
  }
}

// Checklist in Drawer
function initChecklist() {
  const savedChecks = JSON.parse(localStorage.getItem("ecotrack_checklist_harshita") || "{}");
  const savedComments = localStorage.getItem("ecotrack_comments_harshita") || "";
  facultyComments.value = savedComments;

  const isaItems = ACTIVITIES.filter(a => a.category === "isa");
  const eseItems = ACTIVITIES.filter(a => a.category === "ese");

  isaChecklist.innerHTML = isaItems.map(item => createChecklistItemHTML(item, savedChecks[item.id])).join("");
  eseChecklist.innerHTML = eseItems.map(item => createChecklistItemHTML(item, savedChecks[item.id])).join("");

  updateChecklistProgress();

  document.querySelectorAll(".checklist-checkbox").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const parent = e.target.closest(".checklist-item");
      if (e.target.checked) parent.classList.add("checked");
      else parent.classList.remove("checked");
      saveChecklistState();
      updateChecklistProgress();
    });
  });
}

function createChecklistItemHTML(item, isChecked) {
  const checkedAttr = isChecked ? "checked" : "";
  const checkedClass = isChecked ? "checked" : "";
  return `
    <label class="checklist-item ${checkedClass}">
      <input type="checkbox" class="checklist-checkbox" data-id="${item.id}" ${checkedAttr}>
      <span class="checklist-label">
        <strong>${item.index}:</strong> ${item.title}
      </span>
    </label>
  `;
}

function saveChecklistState() {
  const state = {};
  document.querySelectorAll(".checklist-checkbox").forEach(chk => {
    state[chk.getAttribute("data-id")] = chk.checked;
  });
  localStorage.setItem("ecotrack_checklist_harshita", JSON.stringify(state));
}

function updateChecklistProgress() {
  const total = ACTIVITIES.length;
  let checked = 0;
  document.querySelectorAll(".checklist-checkbox").forEach(chk => {
    if (chk.checked) checked++;
  });

  const percentage = Math.round((checked / total) * 100);
  checklistProgress.style.width = `${percentage}%`;
  verifiedCountText.textContent = `${checked} / ${total} Checked (${percentage}%)`;
}

function saveEvaluationLocal() {
  localStorage.setItem("ecotrack_comments_harshita", facultyComments.value);
  calculateTotalScore();
  showToast("Marks & feedback saved successfully for Prof. Aniket Kundu!");
}

// Office Document Previewer Handler
function previewOfficeFile(relativeEncodedPath, filename, fileType) {
  const isOnline = window.location.protocol.startsWith('http');
  
  if (isOnline) {
    const fullPublicUrl = new URL(relativeEncodedPath, window.location.href).href;
    const officeViewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(fullPublicUrl)}`;
    openPreviewModal(officeViewerUrl, `${filename} (${fileType.toUpperCase()} Viewer)`);
  } else {
    // Local environment: trigger download
    const a = document.createElement('a');
    a.href = relativeEncodedPath;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(`Downloading ${filename}`);
  }
}

// Copy All Links
function copyAllLinks() {
  const links = [
    "1. Indian Companies Following E-Waste Rules (DevOps): https://samruddhinareshsakharkar.github.io/Miniproject_Devops/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=b50c1ce2-6167-487e-9f08-51a50e9fbaf0&submissionId=9947b6dc-8517-83e9-9004-774c64ac524d",
    "2. College Campaign Real-time Dashboard: https://pratiksha9321.github.io/ewaste-dashboard/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=91618746-47e9-4f9c-99ca-697c3e2c90f6&submissionId=cc97ed25-40b7-a7aa-c3d4-60aca53fb838&classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=91618746-47e9-4f9c-99ca-697c3e2c90f6&submissionId=b22e3da6-5de6-4f3e-d9f2-6b7822651c37",
    "3. Campus Quiz & Survey Form: https://samruddhinareshsakharkar.github.io/ewaste-quiz-form/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=91618746-47e9-4f9c-99ca-697c3e2c90f6&submissionId=cc97ed25-40b7-a7aa-c3d4-60aca53fb838&classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=91618746-47e9-4f9c-99ca-697c3e2c90f6&submissionId=b22e3da6-5de6-4f3e-d9f2-6b7822651c37",
    "4. Green Building Detector Web App (LEED v5): https://green-building-detector.vercel.app/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=f7c58a0a-f019-4032-9fc8-d08626ab7c25&submissionId=07b7c376-37d5-3746-6a0c-4b091b43c913"
  ].join("\n\n");

  navigator.clipboard.writeText(links).then(() => {
    const copyText = document.getElementById("copyLinksText");
    const orig = copyText.textContent;
    copyText.textContent = "Copied to Clipboard!";
    showToast("All project links copied to clipboard!");
    setTimeout(() => {
      copyText.textContent = orig;
    }, 2500);
  }).catch(() => {
    showToast("Failed to copy links. Please copy manually.");
  });
}

// Toast Display
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("ecotrack_theme");
  if (savedTheme === "dark") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
}

function toggleTheme() {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    localStorage.setItem("ecotrack_theme", "dark");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("ecotrack_theme", "light");
  }
}

// Window attachments for inline event handlers
window.openPreviewModal = openPreviewModal;
window.closePreviewModal = closePreviewModal;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.previewOfficeFile = previewOfficeFile;
window.resetFilters = resetFilters;
window.applyMetricFilter = applyMetricFilter;
window.jumpToCard = jumpToCard;
window.copyAllLinks = copyAllLinks;
window.openEvaluationDrawer = openEvaluationDrawer;
window.closeEvaluationDrawer = closeEvaluationDrawer;
window.calculateTotalScore = calculateTotalScore;
window.saveEvaluationLocal = saveEvaluationLocal;

