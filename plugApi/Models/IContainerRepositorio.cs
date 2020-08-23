using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace plugApi.Models
{
    public interface IContainerRepositorio
    {
        void Add(ContainerItem item);
        IEnumerable<ContainerItem> GetAll();
        ContainerItem Find(string cod_iso);
        void Update(ContainerItem item);
        void Remove(string cod_iso);
    }
}
