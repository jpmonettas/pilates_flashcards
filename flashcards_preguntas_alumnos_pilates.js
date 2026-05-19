var students = [
  {
    "question": "Tengo dolor lumbar, ¿puedo hacer Pilates?",
    "answer": "Muchas personas con dolor lumbar pueden beneficiarse del Pilates, pero los ejercicios deben adaptarse a cada caso."
  },
  {
    "question": "¿Pilates sirve para mejorar la postura?",
    "answer": "Sí, Pilates ayuda a desarrollar conciencia corporal, movilidad y fuerza postural."
  },
  {
    "question": "Nunca hice ejercicio, ¿puedo empezar Pilates?",
    "answer": "Sí. Pilates puede adaptarse a principiantes y comenzar de forma progresiva."
  },
  {
    "question": "¿Necesito ser flexible para hacer Pilates?",
    "answer": "No. La flexibilidad se desarrolla gradualmente con la práctica."
  },
  {
    "question": "¿Pilates ayuda con el estrés?",
    "answer": "Sí, la respiración y el movimiento consciente pueden ayudar a reducir tensión y estrés."
  },
  {
    "question": "Tengo una hernia de disco, ¿es seguro hacer Pilates?",
    "answer": "Depende del caso. Muchos ejercicios pueden adaptarse, pero es importante evitar movimientos que aumenten síntomas."
  },
  {
    "question": "¿Pilates ayuda a fortalecer el abdomen?",
    "answer": "Sí, especialmente la musculatura profunda del centro."
  },
  {
    "question": "¿Voy a bajar de peso haciendo Pilates?",
    "answer": "Pilates puede formar parte de un plan saludable, aunque su foco principal es movimiento, control y funcionalidad."
  },
  {
    "question": "Me duele el cuello cuando hago abdominales, ¿es normal?",
    "answer": "No debería doler. Puede haber exceso de tensión cervical o falta de soporte del centro."
  },
  {
    "question": "¿Qué hago si siento dolor durante un ejercicio?",
    "answer": "Es importante avisar al profesor para modificar o detener el ejercicio."
  },
  {
    "question": "¿Pilates sirve para adultos mayores?",
    "answer": "Sí, puede mejorar movilidad, equilibrio y fuerza funcional."
  },
  {
    "question": "¿Pilates ayuda con la escoliosis?",
    "answer": "Puede ayudar a mejorar control postural y movilidad, siempre con adaptación individual."
  },
  {
    "question": "Estoy embarazada, ¿puedo seguir haciendo Pilates?",
    "answer": "En muchos casos sí, con ejercicios adaptados al embarazo y autorización médica si es necesaria."
  },
  {
    "question": "¿Qué diferencia hay entre yoga y Pilates?",
    "answer": "Pilates se enfoca más en control del movimiento, estabilidad y biomecánica."
  },
  {
    "question": "¿Por qué respiramos así en Pilates?",
    "answer": "La respiración ayuda a organizar el movimiento y mejorar el control corporal."
  },
  {
    "question": "Tengo las rodillas sensibles, ¿puedo hacer los ejercicios?",
    "answer": "Sí, muchos ejercicios pueden modificarse para reducir carga y mejorar estabilidad."
  },
  {
    "question": "¿Es normal temblar durante un ejercicio?",
    "answer": "A veces sí, especialmente cuando músculos estabilizadores trabajan intensamente."
  },
  {
    "question": "¿Pilates puede ayudarme a moverme mejor en mi deporte?",
    "answer": "Sí, puede mejorar control, estabilidad, movilidad y coordinación."
  },
  {
    "question": "¿Por qué hacemos movimientos lentos?",
    "answer": "Porque el movimiento lento ayuda a desarrollar control y conciencia corporal."
  },
  {
    "question": "¿Voy a usar máquinas desde el primer día?",
    "answer": "Depende del instituto y del nivel del alumno."
  },
  {
    "question": "Me mareo al levantarme rápido, ¿qué hago?",
    "answer": "Conviene moverse lentamente y avisar al profesor si ocurre con frecuencia."
  },
  {
    "question": "¿Pilates ayuda a mejorar el equilibrio?",
    "answer": "Sí, muchos ejercicios trabajan estabilidad y control postural."
  },
  {
    "question": "Tengo hipermovilidad, ¿Pilates me sirve?",
    "answer": "Sí, especialmente para desarrollar estabilidad y control."
  },
  {
    "question": "¿Por qué me cuesta coordinar respiración y movimiento?",
    "answer": "Es normal al principio; se desarrolla con práctica."
  },
  {
    "question": "¿Qué pasa si no puedo hacer un ejercicio completo?",
    "answer": "Se puede modificar o usar una versión más accesible."
  },
  {
    "question": "¿Pilates puede ayudarme después del embarazo?",
    "answer": "Sí, especialmente para recuperar control del centro y suelo pélvico."
  },
  {
    "question": "¿Es normal sentir músculos que nunca había sentido?",
    "answer": "Sí, Pilates suele activar musculatura estabilizadora profunda."
  },
  {
    "question": "Tengo osteoporosis, ¿puedo practicar?",
    "answer": "Sí, pero algunos movimientos deben adaptarse para cuidar la columna."
  },
  {
    "question": "¿Pilates sirve para fortalecer la espalda?",
    "answer": "Sí, ayuda a mejorar fuerza y control del tronco."
  },
  {
    "question": "¿Por qué corregís tanto la postura?",
    "answer": "Porque pequeños cambios pueden mejorar seguridad y eficiencia del movimiento."
  },
  {
    "question": "¿Es normal cansarse aunque los ejercicios parezcan suaves?",
    "answer": "Sí, el control y la estabilidad pueden ser muy demandantes."
  },
  {
    "question": "Tengo dolor de hombro, ¿qué hago si un ejercicio molesta?",
    "answer": "Avisar al profesor para adaptar rango, carga o posición."
  },
  {
    "question": "¿Pilates reemplaza fisioterapia?",
    "answer": "No. Pilates y fisioterapia pueden complementarse, pero tienen roles distintos."
  },
  {
    "question": "¿Por qué trabajamos tanto el centro?",
    "answer": "Porque ayuda a estabilizar y organizar el movimiento del cuerpo."
  },
  {
    "question": "¿Pilates puede ayudarme a respirar mejor?",
    "answer": "La práctica puede mejorar conciencia y coordinación respiratoria."
  },
  {
    "question": "¿Qué hago si me siento frustrado porque no me sale un ejercicio?",
    "answer": "Es normal. El aprendizaje del control corporal lleva tiempo."
  },
  {
    "question": "¿Por qué usamos resortes?",
    "answer": "Los resortes ayudan a asistir o desafiar el movimiento."
  },
  {
    "question": "¿Es normal perder el equilibrio?",
    "answer": "Sí, especialmente en ejercicios nuevos o desafiantes."
  },
  {
    "question": "¿Tengo que hacer todos los ejercicios igual que los demás?",
    "answer": "No. Los ejercicios deben adaptarse a cada persona."
  },
  {
    "question": "¿Pilates puede ayudar con rigidez?",
    "answer": "Sí, puede mejorar movilidad y calidad del movimiento."
  },
  {
    "question": "Tengo dolor de muñecas, ¿hay alternativas?",
    "answer": "Sí, pueden modificarse apoyos y posiciones."
  },
  {
    "question": "¿Por qué insistís en moverme más lento?",
    "answer": "Porque la velocidad puede ocultar compensaciones y pérdida de control."
  },
  {
    "question": "¿Qué significa activar el centro?",
    "answer": "Conectar musculatura profunda para estabilizar el cuerpo."
  },
  {
    "question": "¿Es normal sentir trabajo en glúteos durante ejercicios de abdomen?",
    "answer": "Sí, varios músculos colaboran para estabilizar el cuerpo."
  },
  {
    "question": "¿Pilates puede ayudarme si paso muchas horas sentado?",
    "answer": "Sí, puede mejorar postura, movilidad y conciencia corporal."
  },
  {
    "question": "¿Qué hago si me falta el aire?",
    "answer": "Reducir intensidad y volver a una respiración más natural."
  },
  {
    "question": "¿Por qué hacemos ejercicios tan precisos?",
    "answer": "La precisión mejora control, alineación y eficiencia."
  },
  {
    "question": "¿Pilates sirve para prevenir lesiones?",
    "answer": "Puede ayudar al mejorar control, estabilidad y movimiento."
  },
  {
    "question": "Tengo miedo de lesionarme, ¿es normal?",
    "answer": "Sí, especialmente si hubo dolor previo. Por eso los ejercicios se adaptan progresivamente."
  },
  {
    "question": "¿Qué diferencia hay entre fuerza y estabilidad?",
    "answer": "La fuerza genera movimiento; la estabilidad ayuda a controlarlo."
  },
  {
    "question": "¿Pilates puede ayudarme a moverme con menos dolor?",
    "answer": "En muchos casos sí, especialmente cuando mejora control y movilidad."
  },
  {
    "question": "¿Por qué trabajamos la respiración antes de movernos?",
    "answer": "Porque ayuda a organizar el cuerpo y mejorar el control."
  },
  {
    "question": "¿Es malo que me crujan las articulaciones?",
    "answer": "No siempre. Si no hay dolor, muchas veces no es problemático."
  },
  {
    "question": "¿Qué hago si siento tensión en el cuello?",
    "answer": "Intentar relajar hombros y avisar al profesor para ajustar el ejercicio."
  },
  {
    "question": "¿Pilates ayuda a mejorar la conciencia corporal?",
    "answer": "Sí, es uno de los objetivos principales del método."
  },
  {
    "question": "¿Por qué un ejercicio cambia tanto cuando corregís un detalle?",
    "answer": "Porque pequeños ajustes modifican cómo trabaja el cuerpo."
  },
  {
    "question": "¿Pilates puede ayudar con equilibrio después de cierta edad?",
    "answer": "Sí, puede mejorar estabilidad y confianza al moverse."
  },
  {
    "question": "¿Qué pasa si tengo poca movilidad?",
    "answer": "Los ejercicios se adaptan al rango disponible y progresan gradualmente."
  },
  {
    "question": "¿Es normal sentir diferencia entre un lado y otro?",
    "answer": "Sí, muchas personas tienen asimetrías o dominancias."
  },
  {
    "question": "¿Pilates ayuda a deportistas?",
    "answer": "Sí, mejora control, movilidad y eficiencia del movimiento."
  },
  {
    "question": "¿Qué hago si siento presión lumbar?",
    "answer": "Avisar para revisar alineación, respiración o modificar el ejercicio."
  },
  {
    "question": "¿Pilates puede ayudar a fortalecer suelo pélvico?",
    "answer": "Sí, especialmente junto con respiración y control del centro."
  },
  {
    "question": "¿Por qué cuesta tanto mantener la alineación?",
    "answer": "Porque requiere coordinación, fuerza y conciencia corporal."
  },
  {
    "question": "¿Es normal cansarse mentalmente en Pilates?",
    "answer": "Sí, la concentración constante puede ser demandante."
  },
  {
    "question": "¿Qué significa mover con control?",
    "answer": "Moverse conscientemente en lugar de usar impulso."
  },
  {
    "question": "¿Pilates puede ayudar con dolor cervical?",
    "answer": "En muchos casos sí, si se adapta correctamente."
  },
  {
    "question": "¿Qué hago si un ejercicio me genera inseguridad?",
    "answer": "Avisar al profesor para buscar una variante más cómoda."
  },
  {
    "question": "¿Por qué repetimos ejercicios similares?",
    "answer": "Porque repetir ayuda a aprender patrones de movimiento."
  },
  {
    "question": "¿Es normal perder coordinación al cansarme?",
    "answer": "Sí, la fatiga puede afectar el control motor."
  },
  {
    "question": "¿Pilates puede mejorar mi postura al caminar?",
    "answer": "Sí, puede mejorar alineación y conciencia del movimiento."
  },
  {
    "question": "¿Por qué trabajamos tanto los pies?",
    "answer": "Porque son la base de apoyo y afectan toda la cadena corporal."
  },
  {
    "question": "¿Tengo que llegar al máximo rango?",
    "answer": "No. Es más importante el control que la amplitud."
  },
  {
    "question": "¿Qué hago si siento tensión en la mandíbula?",
    "answer": "Intentar relajar rostro y respiración durante el ejercicio."
  },
  {
    "question": "¿Pilates ayuda con equilibrio en un solo pie?",
    "answer": "Sí, muchos ejercicios desarrollan estabilidad unilateral."
  },
  {
    "question": "¿Por qué me cuesta tanto mantener el abdomen activo?",
    "answer": "Porque los músculos estabilizadores profundos suelen requerir entrenamiento específico."
  },
  {
    "question": "¿Pilates puede ayudarme a sentirme más estable?",
    "answer": "Sí, trabaja control y organización corporal."
  },
  {
    "question": "¿Qué significa neutral de pelvis?",
    "answer": "Una posición equilibrada de la pelvis que respeta curvas naturales de la columna."
  },
  {
    "question": "¿Es normal necesitar pausas?",
    "answer": "Sí, especialmente al aprender movimientos nuevos."
  },
  {
    "question": "¿Pilates puede ayudar a mejorar coordinación?",
    "answer": "Sí, integra respiración, control y movimiento."
  },
  {
    "question": "¿Por qué corregís mis pies si el ejercicio es de brazos?",
    "answer": "Porque todo el cuerpo influye en la alineación y estabilidad."
  },
  {
    "question": "¿Qué hago si siento que compenso mucho?",
    "answer": "Reducir dificultad y priorizar control."
  },
  {
    "question": "¿Pilates puede ayudarme a sentirme más ágil?",
    "answer": "Sí, puede mejorar movilidad y calidad del movimiento."
  },
  {
    "question": "¿Por qué algunos ejercicios parecen fáciles pero cuestan mucho?",
    "answer": "Porque el control fino puede ser muy desafiante."
  },
  {
    "question": "¿Es normal cansarse rápido al principio?",
    "answer": "Sí, el cuerpo está aprendiendo nuevas demandas de control."
  },
  {
    "question": "¿Pilates ayuda con la rigidez de espalda?",
    "answer": "Puede ayudar a mejorar movilidad y conciencia postural."
  },
  {
    "question": "¿Qué hago si me comparo con otros alumnos?",
    "answer": "Recordar que cada cuerpo y proceso son diferentes."
  },
  {
    "question": "¿Por qué usamos imágenes o metáforas?",
    "answer": "Porque ayudan a comprender y sentir mejor el movimiento."
  },
  {
    "question": "¿Pilates puede ayudar con tensión muscular?",
    "answer": "Sí, especialmente al mejorar movilidad y respiración."
  },
  {
    "question": "¿Es normal sentir un lado más fuerte?",
    "answer": "Sí, muchas personas tienen desequilibrios musculares."
  },
  {
    "question": "¿Qué hago si no entiendo una consigna?",
    "answer": "Pedir otra explicación o demostración."
  },
  {
    "question": "¿Por qué hacemos pausas entre ejercicios?",
    "answer": "Para reorganizar respiración, postura y concentración."
  },
  {
    "question": "¿Pilates puede ayudar a mejorar control del cuerpo?",
    "answer": "Sí, es uno de los objetivos centrales del método."
  },
  {
    "question": "¿Qué hago si siento que trabajo demasiado con piernas o brazos?",
    "answer": "Revisar alineación y conexión del centro."
  },
  {
    "question": "¿Es normal necesitar tiempo para aprender la respiración?",
    "answer": "Sí, coordinar respiración y movimiento lleva práctica."
  },
  {
    "question": "¿Pilates puede ayudar con movilidad de cadera?",
    "answer": "Sí, muchos ejercicios trabajan movilidad y estabilidad de cadera."
  },
  {
    "question": "¿Por qué insistís en no contener la respiración?",
    "answer": "Porque respirar ayuda a estabilizar y evita tensión innecesaria."
  },
  {
    "question": "¿Qué hago si siento fatiga lumbar?",
    "answer": "Detenerse y revisar técnica, respiración o intensidad."
  },
  {
    "question": "¿Pilates puede ayudar a mejorar mi conciencia postural diaria?",
    "answer": "Sí, muchas personas notan cambios fuera de clase."
  },
  {
    "question": "¿Por qué hacemos ejercicios acostados?",
    "answer": "Porque permiten trabajar control y alineación con menos carga."
  },
  {
    "question": "¿Es normal sentir más estabilidad después de practicar?",
    "answer": "Sí, el control corporal mejora con la práctica constante."
  },
  {
    "question": "¿Qué hago si tengo miedo de moverme por dolor previo?",
    "answer": "Avanzar gradualmente y trabajar dentro de rangos seguros."
  },
  {
    "question": "¿Pilates puede ayudarme a moverme con más confianza?",
    "answer": "Sí, al mejorar control, estabilidad y percepción corporal."
  }
];
