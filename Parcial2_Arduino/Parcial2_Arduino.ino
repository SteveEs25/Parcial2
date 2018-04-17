int boton = 2;
int alarma = 9;

void setup() {
  pinMode(boton, INPUT_PULLUP);
  pinMode(alarma, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if(digitalRead(boton) == 0) {
    Serial.println("Boton Presionado");
    delay(500);
  }
  if(Serial.available()) {
    char letra = Serial.read();
    
    if(letra == 'H') {
      analogWrite(alarma, 128);
    }
    else if(letra == 'L') {
      digitalWrite(alarma, LOW);
    }
  }
}
