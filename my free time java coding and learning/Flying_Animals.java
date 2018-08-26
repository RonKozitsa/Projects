public class Flying_Animals implements Animal, Bird{
    private String nameOfBird;
    private String kind;
    private String food;
    private String wingSize;
    private boolean canFly;

    public Flying_Animals(String nameOfBird) {
        this.nameOfBird = nameOfBird;
    }

    public boolean canBeatEagle(){
        if (this.nameOfBird.equals("superEagle"))return true;
        return false;
    }

    @Override
    public void kind() {
        kind ="bird";
    }

    @Override
    public void food() {
        food = "grains";
    }

    @Override
    public void wingSize() {
        wingSize = "big";
    }

    @Override
    public boolean canFly() {
        return true;
    }
}


class kakadu extends Flying_Animals  {
    public kakadu() {
        super("kakadu");
        canFly();
    }
}

class SuperEagle extends Flying_Animals{

    public SuperEagle() {super("superEagle");
    }

}