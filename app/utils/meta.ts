interface PageMeta {
    title: string;
    description: string;
  }
  
  const pageMetas: Record<string, PageMeta> = {
    home: {
      title: "NODO EAFIT - Plataforma de Innovación",
      description: "Plataforma de innovación y aprendizaje de EAFIT"
    },
    empresas: {
      title: "NODO EAFIT - Empresas",
      description: "Soluciones tecnológicas para empresas"
    },
    talento: {
      title: "NODO EAFIT - Talento",
      description: "Formación y desarrollo de talento tecnológico"
    },
    asistente: {
      title: "NODO EAFIT - Asistente Virtual",
      description: "Asistente virtual para resolver tus dudas sobre NODO"
    },
    codigoNodo: {
      title: "NODO EAFIT - Código NODO",
      description: "Desarrollo de software y proyectos tecnológicos"
    }
  };
  
  export function getPageMeta(page: keyof typeof pageMetas): PageMeta {
    return pageMetas[page] || pageMetas.home;
  }