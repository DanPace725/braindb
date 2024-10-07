export interface BrainStructure {
  term: string;
  category: string;
  parent: string;
  function: string;
  children: string[];
}

export const brainData: BrainStructure[] = [
  {
    term: "Forebrain",
    category: "Division",
    parent: "",
    function: "Governs complex cognitive functions such as thought, emotion, and voluntary movement.",
    children: ["Telencephalon", "Diencephalon"]
  },
  {
    term: "Midbrain",
    category: "Division",
    parent: "",
    function: "Relays sensory and motor signals and manages basic visual and auditory reflexes.",
    children: ["Tectum", "Tegmentum"]
  },
  {
    term: "Hindbrain",
    category: "Division",
    parent: "",
    function: "Controls essential life-sustaining functions like breathing, heartbeat, and motor coordination.",
    children: ["Metencephalon", "Myelencephalon"]
  },
  {
    term: "Telencephalon",
    category: "Subdivision",
    parent: "Forebrain",
    function: "Processes sensory and motor information, and controls higher-order functions like reasoning and memory.",
    children: ["Cerebral Cortex", "Basal Ganglia", "Limbic System"]
  },
  {
    term: "Diencephalon",
    category: "Subdivision",
    parent: "Forebrain",
    function: "Relays sensory information, regulates autonomic functions, and maintains homeostasis.",
    children: ["Thalamus", "Hypothalamus", "Epithalamus", "Subthalamus"]
  },
  {
    term: "Tectum",
    category: "Subdivision",
    parent: "Midbrain",
    function: "Processes visual and auditory information.",
    children: ["Superior Colliculus", "Inferior Colliculus"]
  },
  {
    term: "Tegmentum",
    category: "Subdivision",
    parent: "Midbrain",
    function: "Contains nuclei involved in arousal, reward, and motor control.",
    children: ["Substantia Nigra", "Red Nucleus", "Periaqueductal Gray"]
  },
  {
    term: "Metencephalon",
    category: "Subdivision",
    parent: "Hindbrain",
    function: "Coordinates motor control, balance, and certain cognitive functions.",
    children: ["Pons", "Cerebellum"]
  },
  {
    term: "Myelencephalon",
    category: "Subdivision",
    parent: "Hindbrain",
    function: "Regulates vital autonomic functions and relays information between the brain and spinal cord.",
    children: ["Medulla Oblongata"]
  }
];

export function getStructureByTerm(term: string): BrainStructure | undefined {
  return brainData.find(structure => structure.term === term);
}

export function getChildStructures(term: string): BrainStructure[] {
  const structure = getStructureByTerm(term);
  if (!structure) return [];
  return structure.children.map(childTerm => getStructureByTerm(childTerm)).filter((s): s is BrainStructure => s !== undefined);
}

export function getMainDivisions(): BrainStructure[] {
  return brainData.filter(structure => structure.category === "Division");
}