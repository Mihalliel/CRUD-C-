namespace EmployeesCoreApi.Domain
{
    public enum Role
    {

    }
    class RoleAttribute : Attribute
    {
        public string Name { get; private set; }

        public RoleAttribute(string name)
        {
            this.Name = name;
        }
    }
}

/*         
        ACN = "Assistente de Clientes e Negócios",
        GCN = "Gerente de Clientes e Negócios",
        SE = "Superintendente Executivo",
        AJ = "Assistente Júnior",
        AP = "Assistente Pleno",
        AS = "Assistente Sênior",
        SCF = "Supervisor de Centralizadora/Filial",
        CCF = "Coordenador de Centralizadora/FIlial",
        GCF = "Gerente de Centralizadora/Filial",
*/